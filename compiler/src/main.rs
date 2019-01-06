#[macro_use] extern crate nickel;
extern crate rand;

// Randomize
use rand::{ Rng, thread_rng };

// Nickel
use nickel::{Nickel, MediaType, HttpRouter, Request, Response, MiddlewareResult};
use nickel::status::StatusCode;

// Std lib
use std::fs::{ File, create_dir, metadata, remove_file };
use std::io::{Read};
use std::io::prelude::*;
use std::process::{ Command, Output };

static NOTFOUND: &[u8] = b"Not Found";

fn compile(input_file: &String, output_path: &String) -> Option<String> {
    let cmd_out = Command::new("rustc")
        .arg("--out-dir")
        .arg(output_path)
        .arg(input_file)
        .output()
        .expect("failed to execute process");
    
    if !cmd_out.status.success() {
        return Some(String::from_utf8_lossy(&cmd_out.stderr).to_string())
    }
    
    None
}

fn run_compile_file(binary_file_path: &String) 
     -> Result<String, String>
{
    let cmd_out = Command::new(binary_file_path)
        .output()
        .expect("failed to execute process");

    if !cmd_out.status.success() {
        return Err(String::from_utf8_lossy(&cmd_out.stderr).to_string())
    }

    Ok(String::from_utf8_lossy(&cmd_out.stdout).to_string())
}

fn enable_cors<'mw>(_req: &mut Request, mut res: Response<'mw>) -> MiddlewareResult<'mw> {
    // Set appropriate headers
    res.headers_mut().set_raw("Access-Control-Allow-Origin", vec![b"*".to_vec()]);
    res.headers_mut().set_raw("Access-Control-Allow-Methods", vec![b"*".to_vec()]);
    res.headers_mut().set_raw("Access-Control-Allow-Headers", vec![b"Origin, X-Requested-With, Content-Type, Accept".to_vec()]);

    // Pass control to the next middleware
    res.next_middleware()
}

fn main() {
    let mut server = Nickel::new();
    server.utilize(enable_cors);
    server.options("**", middleware!(""));

    let out_dir = "./outputDirectory";
    let file_name: String = thread_rng()
        .gen_ascii_chars()
        .take(30)
        .collect();

    if (!metadata(&out_dir).is_ok()) {
        create_dir(&out_dir);
    }

    server.utilize(router! {
        post "/code_run" => |req, mut res| {
            let mut body = vec![];
            req.origin.read_to_end(&mut body).unwrap();
            let body_to_string = String::from_utf8_lossy(&body).to_string();
            
            let create_file_path = format!("{}/{}.rs", &out_dir, &file_name);
            let binary_file_path = format!("{}/{}", &out_dir, &file_name);
            
            let mut file = File::create(&create_file_path).unwrap();
            file.write_all(&body).unwrap();

            let compile_handle_errors = compile(&create_file_path, &out_dir.to_string());
            if let Some(errorMessage) = compile_handle_errors {
                res.set(StatusCode::BadRequest);
                remove_file(&create_file_path);
                return res.send(errorMessage)
            } else {
                remove_file(&create_file_path);
            }
            
            match run_compile_file(&binary_file_path) {
                Ok(stdout_value) => {
                    res.set(StatusCode::Ok);
                    remove_file(&binary_file_path);
                    return res.send(stdout_value)
                },
                Err(errorMessage) => {
                    res.set(StatusCode::BadRequest);
                    remove_file(&binary_file_path);
                    return res.send(errorMessage)
                }
            };

            NOTFOUND
        }
    });

    server.listen("0.0.0.0:8949");
}
// #![deny(warnings)]
extern crate futures;
extern crate hyper;
extern crate rand;
extern crate pretty_env_logger;

// Randomize
use rand::{ thread_rng, Rng };

// Std lib
use std::fs::{ File, create_dir, metadata, remove_file };
use std::io::prelude::*;
use std::process::Command;

// Hyper use
use hyper::{ Body, Request, Response, Server, Method, Client, StatusCode };
use hyper::client::HttpConnector;
use hyper::service::service_fn;
use futures::{ future, Future };

static NOTFOUND: &[u8] = b"Not Found";


fn compile(full_path: &String) {
    Command::new("rustc")
        .arg(full_path)
        .output()
        .expect("failed to execute process");
}

// fn run() {

// }

fn response(req: Request<Body>, _client: &Client<HttpConnector>)
    -> Box<Future<Item=Response<Body>, Error=hyper::Error> + Send>
{
    match (req.method(), req.uri().path()) {
        (&Method::POST, "/code_run") => {
            let out_dir = "./outputDirectory";
            let filename: String = thread_rng()
                .gen_ascii_chars()
                .take(30)
                .collect();
            
            let full_path = format!("{}/{}.rs", out_dir, filename);
            let mut file = File::create(&full_path);
            compile(&full_path);
            // remove_file(&full_path);
            let body = Body::from("hello");
            Box::new(future::ok(Response::new(body)))
        },
        _ => {
            let body = Body::from(NOTFOUND);
            Box::new(future::ok(Response::builder()
                .status(StatusCode::NOT_FOUND)
                .body(body)
                .unwrap()))
        }
    }
}

fn main() {
    pretty_env_logger::init();

    let out_dir = "./outputDirectory";
    if (!metadata(&out_dir).is_ok()) {
        create_dir(&out_dir);
    }

    let address = ([0, 0, 0, 0], 8949).into();
    let client = Client::new();
    let server = Server::bind(&address)
        .serve(move || {
            let client = client.clone();
            service_fn(move |req| {
                response(req, &client)
            })
        })
        .map_err(|error| eprintln!("Server error {}", error));

    hyper::rt::run(server);
}

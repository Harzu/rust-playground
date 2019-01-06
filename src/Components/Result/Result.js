import React, { Component } from 'react'
import { ResultWrapper, ResultOutput, Buttons } from './ResultStyle'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeCodeValue, changeResultValue } from '../../Action'

class Result extends Component {
  constructor(props) {
    super(props)
    this.state = { resultValue: '', display: 'none' }
    this.runCode = this.runCode.bind(this)
    this.resetCode = this.resetCode.bind(this)
  }

  async runCode() {
    const { value } = this.props.sandbox
    const headers = new Headers({ 'Content-Type': 'text/html' })
    const fetchParams = {
      method: 'POST',
      headers,
      mode: 'cors',
      body: value
    }

    const runCompilerResult = await fetch('http://localhost:8949/code_run', fetchParams)
      .then(response => response.text())

    if (runCompilerResult) {
      this.setState({
        display: 'block',
        resultValue: runCompilerResult
      })
    } else {
      this.setState({ display: 'none' })
    }
  }

  resetCode() {
    this.props.changeCodeValue(`fn main() {\n    // ...code\n}`)
  }

  render() {
    return (
      <ResultWrapper className={this.props.className}>
        <ResultOutput style={{ display: this.state.display }}>
          { this.state.resultValue }  
        </ResultOutput>
        <Buttons>
          <button onClick={this.runCode}>Run</button>
          <button onClick={this.resetCode}>reset</button>
        </Buttons>
      </ResultWrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    sandbox: state.sandBox[0]
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ changeCodeValue, changeResultValue }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Result)
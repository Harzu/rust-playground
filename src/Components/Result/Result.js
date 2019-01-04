import React, { Component } from 'react'
import { ResultWrapper, Buttons } from './ResultStyle'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeCodeValue } from '../../Action'

class Result extends Component {
  constructor(props) {
    super(props)
    this.runCode = this.runCode.bind(this)
    this.resetCode = this.resetCode.bind(this)
  }

  runCode() {
    const { value } = this.props.sandbox
    console.log(value)
  }

  resetCode() {
    this.props.changeCodeValue(`fn main() {\n    // ...code\n}`)
  }

  render() {
    return (
      <ResultWrapper className={this.props.className}>
        <Buttons>
          <button onClick={this.runCode}>Run</button>
          <button onClick={this.resetCode}>reset</button>
        </Buttons>
      </ResultWrapper>
    )
  }
}

function mapState(state) {
  return {
    sandbox: state.sandBox[0]
  }
}

function mapDispatch(dispatch) {
  return bindActionCreators({ changeCodeValue }, dispatch)
}

export default connect(mapState, mapDispatch)(Result)
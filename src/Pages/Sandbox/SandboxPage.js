import React, { Component } from 'react'
import { Editor } from '../../Components/Editor'
import { Result } from '../../Components/Result'

// State
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Style
import { SandBoxWrapper } from './SandboxStyle'

class SandboxPage extends Component {
  render() {
    return (
      <SandBoxWrapper>
        <Editor className='playground-editor' />
        <Result className='playground-result' />
      </SandBoxWrapper>
    )
  }
}

function mapState(state) {
  return {
    sandbox: state.sandBox
  }
}

export default connect(mapState)(SandboxPage)
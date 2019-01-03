import React, { Component } from 'react'
import AceEditor from 'react-ace';

import 'brace/mode/rust';
import 'brace/theme/twilight';

import { EditorWrapper } from './EditorStyle'

// State
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeCodeValue } from '../../Action'

class Editor extends Component {
  constructor(props) {
    super(props)
  }

  showValue() {
    return this.props.sandbox.value
  }

  render() {
    console.log(this)
    return (
      <EditorWrapper className={this.props.className}>
        <AceEditor
          mode="rust"
          theme="twilight"
          name="playground"
          onChange={changeCodeValue}
          width={'100%'}
          height={'100%'}
          fontSize={18}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={this.showValue()}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 4,
          }}
        />
      </EditorWrapper>
    )
  }
}

function mapState(state) {
  return {
    sandbox: state.sandBox[0]
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeCodeValue }, dispatch)
}

export default connect(mapState, mapDispatchToProps)(Editor)
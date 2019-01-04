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
    this.state = { value: this.props.sandbox[0].value }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.sandbox[0].value })
  }

  render() {
    return (
      <EditorWrapper className={this.props.className}>
        <AceEditor
          mode="rust"
          theme="twilight"
          refs="editor"
          name="playground"
          onChange={this.props.changeCodeValue}
          width={'100%'}
          height={'100%'}
          fontSize={18}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={this.state.value}
          editorProps={{ $blockScrolling: true }}
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

function mapStateToProps(state) {
  return {
    sandbox: state.sandBox
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ changeCodeValue }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Editor)
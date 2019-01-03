import React, { Component } from 'react'

import { ResultWrapper, Buttons } from './ResultStyle'

export default class Result extends Component {
  render() {
    return (
      <ResultWrapper className={this.props.className}>
        <Buttons>
          <button>Run</button>
          <button>reset</button>
        </Buttons>
      </ResultWrapper>
    )
  }
}
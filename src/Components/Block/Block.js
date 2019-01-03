import React, { Component } from 'react'
import { BlockWrapper, BlockName, BlockDescript } from './BlockStyle'

export default class Block extends Component {
  render() {
    return (
      <BlockWrapper>
        <BlockName>{ this.props.name }</BlockName>
        <BlockDescript>{ this.props.descript }</BlockDescript>
      </BlockWrapper>
    )
  }
}
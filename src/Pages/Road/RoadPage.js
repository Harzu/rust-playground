import React, { Component } from 'react'
import { Block } from '../../Components/Block'

import { RoadWrapper } from './RoadStyle'
import { BodyWrapper } from '../../Style/CommonStyle'

const blocks = [
  { name: 'Вступление', descript: 'поговорим о RUST' }
]

export default class RoadPage extends Component {
  renderBlocks() {
    return blocks.map(block => {
      return (
        <Block name={ block.name } descript={ block.descript }/>
      )
    })
  }

  render() {
    return (
      <BodyWrapper>
        <RoadWrapper>
          { this.renderBlocks() }
        </RoadWrapper>
      </BodyWrapper>
    )
  }
}
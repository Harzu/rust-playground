import styled from 'styled-components'
import { rem } from 'polished'
import { media } from '../../Themes'

export const EditorWrapper = styled.div`
  &.playground-editor {
    width: 50%;
    height: 100%;
    ${media.s`
      width: 100%;
      height: 50%;
    `};
    ${media.xs`
      width: ${rem('375px')}
    `}
  }
`
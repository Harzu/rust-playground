import styled from 'styled-components'
import { rem } from 'polished'
import { media } from '../../Themes'

export const SandBoxWrapper = styled.section`
  display: flex;
  height: calc(100vh - ${rem('113px')});
  ${media.s`
    flex-direction: column;
  `}
`
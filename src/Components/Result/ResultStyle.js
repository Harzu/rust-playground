import styled from 'styled-components'
import { rem } from 'polished'
import { Colors, fonts, media } from '../../Themes'

export const ResultWrapper = styled.section`
  position: relative;
  padding: ${rem('20px')};
  font-family: ${fonts.regular};
  font-size: ${rem('18px')};
  font-weight: 100;
  color: ${Colors.white};
  background-color: ${Colors.resultBlack};
  &.playground-result {
    width: 50%;
    ${media.s`
      border-top: 3px solid ${Colors.mediumOrange}
      width: 100%;
      height: 100%
    `}
  }
`

export const Buttons = styled.div`
  position: absolute;
  bottom: 20px;
  & button {
    margin-left: ${rem('10px')};
    padding ${rem('5px')} ${rem('20px')};
    font-family: ${fonts.regular};
    text-transform: uppercase;
    color: ${Colors.white};
    background-color: transparent;
    outline: none;
    border: 2px solid ${Colors.mediumOrange};
    border-radius ${rem('10px')};
    transition: .3s linear;
    &:hover {
      background-color: ${Colors.red}
      border-color: transparent; 
    }
    &:first-child {
      margin-left: 0;
      &:hover {
        background-color: ${Colors.green}
      }
    }
  }
`
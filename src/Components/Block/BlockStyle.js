import styled from 'styled-components'
import { rem } from 'polished'
import { Colors, fonts } from '../../Themes'

export const BlockWrapper = styled.div`
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;  
  padding: ${rem('10px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-width: ${rem('100px')};
  min-height: ${rem('100px')};
  border 3px solid ${Colors.mediumOrange};
  border-radius: ${rem('7px')}
  transition: .3s linear;
  &:hover {
    color: ${Colors.editorBlack};
    background-color: ${Colors.mediumOrange}
  }
`

export const BlockName = styled.span`
  display: block;
  font-family: ${fonts.regular};
  font-size: ${rem('20px')};
  font-weight: 700
`

export const BlockDescript = styled.span`
  mergin-top: ${rem('5px')};
  display: block;
  font-family: ${fonts.regular}
  font-size: ${rem('12px')};
`
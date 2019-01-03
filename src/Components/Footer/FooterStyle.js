import styled from 'styled-components'
import { rem } from 'polished'
import { Colors, fonts } from '../../Themes'

export const FooterWrapper = styled.footer`
  padding: ${rem('5px')} ${rem('20px')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${fonts.regular};
  text-align: center;
  color: ${Colors.white};
  background-color: ${Colors.black};
  border-top: 3px solid ${Colors.mediumOrange}
`
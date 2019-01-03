
import styled from 'styled-components'
import { rem } from 'polished'
import { Colors, media } from '../../Themes'

export const NavBar = styled.nav`
  & a {
    margin-left: ${rem('10px')}
    color: ${Colors.mediumOrange};
    transition: color .4s linear;
    &:hover {
      color: ${Colors.lightOrange};
    }
  }
`

export const Logo = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;  
`

export const HeaderWrapper = styled.header`
  padding: 0 ${rem('20px')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${rem('75px')};
  font-family: 'Montserrat', BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: ${rem('14px')};
  line-height: ${rem('17px')};
  letter-spacing: ${rem('0.75px')};
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  color: ${Colors.white};
  border-bottom: 6px solid ${Colors.mediumOrange};
  background-color: ${Colors.black};
  ${media.xs`
    width: ${rem('375px')}
  `}
`
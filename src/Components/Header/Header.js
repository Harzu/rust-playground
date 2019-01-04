import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { HeaderWrapper, NavBar, Logo } from './HeaderStyle'

export default class Header extends Component {
  renderNavLink() {
    return (
      <NavBar>
        {/* <Link to='/'>Main</Link> */}
        {/* <Link to='/'></Link> */}
        {/* <Link to='/playground'>Playground</Link> */}
      </NavBar>
    )
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo>RUST Playground</Logo>
        <nav className="nav">        
          {this.renderNavLink()}
        </nav>
      </HeaderWrapper>
    )
  }
}
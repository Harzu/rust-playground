import React, { Component } from 'react'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import { Wrapper } from '../Style/CommonStyle'
import { Router, Route, Switch } from 'react-router-dom'
import { RoadPage, SandboxPage } from '../Pages'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


import history from './History'

export const routes = [
  {
    path: '/',
    name: 'Road to rust',
    exact: true,
    component: RoadPage
  },
  {
    path: '/playground',
    name: 'Try it out',
    exact: true,
    component: SandboxPage
  }
]

export class CreateRouter extends Component {
  renderRoute(params, index) {
    const { exact, path, component } = params
    return (
      <Route
        key={`route:${index}`}
        exact={exact}
        path={path}
        component={component}
      />
    )
  }

  renderRoutes() {
    return (
      <Wrapper>
        <Header />
        <ReactCSSTransitionGroup
          transitionName='example'
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          <Switch>{routes.map(this.renderRoute)}</Switch>
        </ReactCSSTransitionGroup>
        <Footer />
      </Wrapper>
    )
  }

  render() {
    return (
      <Router history={history}>
        {this.renderRoutes()}
      </Router>
    )
  }
}


import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App'

import About from './routes/About'
import Repos from './routes/Repos'

const routes = {
  path: '/',
  component: App,
  //childRoutes: [
  //  About,
  //  Repos
  //]

  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      const About = require('./routes/About').default;
      const Repos = require('./routes/Repos').default;

      cb(null, [
        // Provide store for async reducers and middleware
        About,
        Repos
      ])
    })
  }
}

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
)

//import About from './routes/About/components/About'
//import Repos from './routes/Repos/components/Repos'
//render((
//  <Router history={browserHistory}>
//    <Route path="/" component={App}>
//      <Route path="/repos" component={Repos} />
//      <Route path="/about" component={About} />
//    </Route>
//  </Router>
//), document.getElementById('app'))

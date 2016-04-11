import React from 'react'
import {Route} from 'react-router'
import App from './layouts/App'
import Home from './views/Home'
import NotFound from './views/NotFound'
const routes = (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='*' component={NotFound} />
  </Route>
)

export default routes

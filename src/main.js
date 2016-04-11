import 'babel-polyfill'
import 'normalize.css'
import './globals.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory as history} from 'react-router'
import routes from './routes'

import attachFastClick from 'fastclick'
attachFastClick.attach(document.body)

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <Router
    children={routes}
    history={history}
  />,
  document.getElementById('root')
)

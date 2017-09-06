import { DenisKenzo, ZamygaAlexandra } from './components/Home'
import { Router, Route, hashHistory } from 'react-router'
import Home from './components/Home/Home.jsx'
import ReactDOM from 'react-dom'
import React from 'react'
import './main.styl'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Home} />
    <Route path='html/ZamygaAlexandra' component={ZamygaAlexandra} />
    <Route path='html/DenisKenzo' component={DenisKenzo} />
  </Router>,
  document.getElementById('root')
)

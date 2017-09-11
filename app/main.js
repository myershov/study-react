import { DenisKenzo, ZamygaAlexandra, Krasav4er } from './components/Home'
import { Project1, Project2 } from './components/Home/Krasav4er/Projects'
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
    <Route path='html/Krasav4er' component={Krasav4er} />
    <Route path='html/Krasav4er/project1' component={Project1} />
    <Route path='html/Krasav4er/project2' component={Project2} />
  </Router>,
  document.getElementById('root')
)

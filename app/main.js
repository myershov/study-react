import { DenisKenzo, ZamygaAlexandra, Krasav4er, Yaroslav_Grushchak } from './components/Home'
import { Project1, Project2 } from './components/Home/Krasav4er/Projects'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import ReactDOM from 'react-dom'
import React from 'react'
import './main.styl'

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/html/ZamygaAlexandra' component={ZamygaAlexandra} />
        <Route path='/html/DenisKenzo' component={DenisKenzo} />
        <Route exact path='/html/Krasav4er' component={Krasav4er} />
        <Route path='/html/Krasav4er/project1' component={Project1} />
        <Route path='/html/Krasav4er/project2' component={Project2} />
        <Route path='/html/Yaroslav_Grushchak' component={Yaroslav_Grushchak} />
      </div>
  </Router>,
  document.getElementById('root')
)

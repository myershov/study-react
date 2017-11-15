import { DenisKenzo, ZamygaAlexandra, Krasav4er, Yaroslav_Grushchak, DarinkaP } from './components/Home'
import { DarinkaProject1 } from './components/Home/DarinkaP/Projects'
import { Project1, Project2, Project3 } from './components/Home/Krasav4er/Projects'
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
      <Route path='/html/Krasav4er/project3' component={Project3} />
      <Route path='/html/Yaroslav_Grushchak' component={Yaroslav_Grushchak} />
      <Route exact path='/html/DarinkaP' component={DarinkaP} />
      <Route path='/html/DarinkaP/project_1' component={DarinkaProject1} />
    </div>
  </Router>,
  document.getElementById('root')
)

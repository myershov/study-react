import React from 'react'
import 'react-bootstrap/lib/Grid'

import './App.styl'

import Header from './components/header/header.component.js'
import Services from './components/services/services.component'
import Portfolio from './components/portfolio/portfolio.component'

class Project_1 extends React.Component {
  render () {
    return (
      <div className='blueasy'>
        <Header />
        <Services />
        <Portfolio />
      </div>
    )
  }
}

export default Project_1

import React, { Component } from 'react'
import { Link } from 'react-router'
import './Krasav4er.styl'

class Krasav4er extends Component {
  render () {
    return (
      <div id='home'>
        <div className='title'>Projects by krasav4er</div>
        <Link to={'/html/Krasav4er/project1'}>Project #1</Link>
        <div className='test' />
      </div>
    )
  }
}
export default Krasav4er

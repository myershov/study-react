import React, { Component } from 'react'
import { Link } from 'react-router'
import './home.styl'

class Home extends Component {
  render () {
    return (
      <div id='home'>
        <Link to={'/html/ZamygaAlexandra'}>ZamygaAlexandra</Link>
        <Link to={'/html/DenisKenzo'}>DenisKenzo</Link>
        <Link to={'/html/Krasav4er'}>krasav4er</Link>
        <div className='test' />
      </div>
    )
  }
}
export default Home

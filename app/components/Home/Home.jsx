import React, { Component } from 'react'
import { Link } from 'react-router'
import './home.styl'

class Home extends Component {
  render () {
    return (
      <div id='home'>
        <Link to={'/html/ZamygaAlexandra'}>ZamygaAlexandra</Link><br /><br />
        <Link to={'/html/DenisKenzo'}>DenisKenzo</Link><br /><br />
        <Link to={'/html/Krasav4er'}>krasav4er</Link><br /><br />
        <div className='test' />
      </div>
    )
  }
}
export default Home

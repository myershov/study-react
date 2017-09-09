import React, { Component } from 'react'
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import Body from './Body/Body.jsx'
import './Krasav4er.styl'

class Krasav4er extends Component {
  render () {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}
export default Krasav4er

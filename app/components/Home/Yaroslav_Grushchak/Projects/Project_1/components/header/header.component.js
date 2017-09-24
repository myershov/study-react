import React from 'react'
import { Grid } from 'react-bootstrap'
import ReactDOM from 'react-dom'

// import './header.component.css';
import './header.component.styl'
import NavMenu from '../header-nav-menu/header-nav-menu.component'

class Header extends React.Component {
  constructor () {
    super()
    this.menuHeight
    this.state = { isHidden: true }
  }
  componentDidMount () {
    if (window.innerWidth > 992) {
      ReactDOM.findDOMNode(this.navRef).style = ''
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })

    let menuElemsQuantity = ReactDOM.findDOMNode(this.navRef).children.length // количество элементов внутри выпадаюшего меню
    this.menuHeight = ReactDOM.findDOMNode(this.navRef).children[0].offsetHeight
    this.menuHeight += Number(window.getComputedStyle(ReactDOM.findDOMNode(this.navRef).children[0]).getPropertyValue('margin-top').slice(0, -2))
    this.menuHeight += Number(window.getComputedStyle(ReactDOM.findDOMNode(this.navRef).children[0]).getPropertyValue('margin-bottom').slice(0, -2))
    this.menuHeight = this.menuHeight * menuElemsQuantity + 'px'

    window.addEventListener('resize', () => {
      if (window.innerWidth > 992) {
        this.setState({isHidden: true})
        ReactDOM.findDOMNode(this.navRef).style = ''
      }
    })
  }
  update () {
    this.setState({ isHidden: true })
  }
  render () {
    return (
      <Grid componentClass='header' fluid>
        <Grid fluid className='top_nav'>
          <Grid>
            <a href='#' className='logo'>
              <img src={require('../../images/logo.png')} alt='Blueasy' />
            </a>

            <span onClick={() => this.toggleHidden()} className='main-nav-trigger trigger-nav glyphicon glyphicon-menu-hamburger' />
            <NavMenu ref={component => this.navRef = component}
              style={this.state.isHidden ? {maxHeight: 0} : {maxHeight: this.menuHeight}}
              update={() => this.update()} />
          </Grid>
        </Grid>

        <Grid className='hero'>
          <h1>
            <span>&#8243;I&#8242;m looking for the unexpected.</span><br />
            <span>I&#8242;m looking for things I&#8242;ve never seen before.&#8243;</span>
          </h1>
        </Grid>
      </Grid>
    )
  }
}

export default Header

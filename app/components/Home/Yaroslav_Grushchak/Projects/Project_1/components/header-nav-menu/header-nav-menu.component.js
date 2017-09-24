import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

class NavMenu extends React.Component {
  render () {
    return (
      <NawMenuWrapper update={() => this.props.update()} className='trigger-victim' style={this.props.style}>
        <a>Home</a>
        <Link to='#services'>Services</Link>
        <a>Features</a>
        <Link to='#portfolio'>Portfolio</Link>
        <a>Contact</a>
      </NawMenuWrapper>
    )
  }
}

class NawMenuWrapper extends React.Component {
  constructor () {
    super()
  }
  render () {
    let addOnClick = child =>
      React.cloneElement(child, { // для того, чтобы модифицировать элементы, нужно создать НОВЫЙ элемент с помощью React.cloneElement, 2й аргумент - то, как мы хотим расширить первый аргумент
        onClick: () => this.props.update()
      })

    let items = React.Children.map(this.props.children, addOnClick) // addOnClick - функция-иттератор
    items = items.map(item => <li key={item.props.children}>{item}</li>)
    return (
      <nav className={this.props.className} style={this.props.style}>
        {items}
      </nav>
    )
  }
}

export default NavMenu

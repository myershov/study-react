import React from 'react'

const portfolioCategories = [
  'all',
  'panoramas',
  'portraits',
  'macro',
  'journal'
]

class PortfolioCategoryButtons extends React.Component {
  render () {
    return (
      <nav className='tab-menu trigger-victim' style={this.props.style}>

        {portfolioCategories.map(item => (
          <li key={item}><a onClick={e => this.props.update(e)}>{item}</a></li>
        ))}
      </nav>
    )
  }
}

export default PortfolioCategoryButtons

import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import ReactDOM from 'react-dom'

// import './portfolio.component.css';
import './portfolio.component.styl'
import PortfolioCategoryButtons from '../portfolio-category-buttons/portfolio-category-buttons.component'

const portfolio = [
  {
    id: 1,
    class_name: 'thumb-1',
    section: ['panoramas', 'macro']
  },
  {
    id: 2,
    class_name: 'thumb-2',
    section: ['panoramas', 'journal']
  },
  {
    id: 3,
    class_name: 'thumb-3',
    section: ['panoramas', 'macro']
  },
  {
    id: 4,
    class_name: 'thumb-4',
    section: ['panoramas', 'journal']
  },
  {
    id: 5,
    class_name: 'thumb-5',
    section: ['portraits', 'macro']
  },
  {
    id: 6,
    class_name: 'thumb-6',
    section: ['portraits', 'journal']
  },
  {
    id: 7,
    class_name: 'thumb-7',
    section: ['portraits', 'macro']
  },
  {
    id: 8,
    class_name: 'thumb-8',
    section: ['portraits', 'journal']
  }
]

class Portfolio extends React.Component {
  constructor () {
    super()
    this.portfolio = portfolio
    this.menuHeight
    this.state = {
      filteredPortfolio: portfolio,
      isHidden: true
    }
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
  isEqual (item, section) {
    return item.section.some(s => s === section)
  }
  update (e) {
    let section = e.target.text.toLowerCase()

    let filteredPortfolio

    if (section !== 'all') { // фильтрация элементов, если выбрана любая категория, кроме 'all'
      filteredPortfolio = this.portfolio.filter(item => this.isEqual(item, section))
    } else {
      filteredPortfolio = this.portfolio
    }

    this.setState({
      filteredPortfolio,
      isHidden: true
    })
  }
  render () {
    return (
      <Grid fluid className='portfolio'>

        <a id='portfolio' />

        <Grid componentClass='section' className='tab-wrapper'>
          <h2 className='stn-heading'>Portfolio</h2>

          <span onClick={() => this.toggleHidden()} className='main-nav-trigger trigger-nav glyphicon glyphicon-menu-hamburger' />
          <PortfolioCategoryButtons ref={component => this.navRef = component}
            style={this.state.isHidden ? {maxHeight: 0} : {maxHeight: this.menuHeight}}
            update={e => this.update(e)} />

          <Row className='thumbs-row'>
            {
              this.state.filteredPortfolio.map(item =>
                <Col key={item.id} lg={3} md={6} sm={6} xs={12}><a href='#!' className={item.class_name} /></Col>
              )
            }
          </Row>

        </Grid>
      </Grid>
    )
  }
};

export default Portfolio

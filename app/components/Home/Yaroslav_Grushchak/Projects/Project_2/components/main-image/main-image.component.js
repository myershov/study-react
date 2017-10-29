import React from 'react'
import {Col} from 'react-bootstrap'

import './main-image.component.styl'

const MainImage = props => (
  <Col className='mainImg' lg={10} md={10} sm={12} xs={12} mdPush={2}>
    <img src={props.mainImg.image_url} alt={props.mainImg.name} />
    <div className='title'>{props.mainImg.name + ' \u2013 ' + props.mainImg.user.username}</div>
  </Col>
)
// <Col componentClass='img' className='mainImg' lg={10} md={10} sm={12} xs={12} mdPush={2} src={this.state.mainImg.image_url} alt={this.state.mainImg.name} />

export default MainImage

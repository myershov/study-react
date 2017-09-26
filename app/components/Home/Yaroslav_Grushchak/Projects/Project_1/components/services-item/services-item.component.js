import React from 'react'
import { Col } from 'react-bootstrap'

const ServicesItem = props => (
  <Col componentClass='article' lg={3} md={6} sm={6} xs={6}>
    <div className={props.class_name} />
    <h3>{props.title}</h3>
    <p>{props.text}</p>
  </Col>
)

export default ServicesItem

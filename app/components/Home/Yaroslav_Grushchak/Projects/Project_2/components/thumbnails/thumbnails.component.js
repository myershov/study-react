import React from 'react'
import {Col} from 'react-bootstrap'

import './thumbnails.component.styl'

const Thumbnails = props => (
  <Col className='thumbnails' lg={2} md={2} sm={12} xs={12} mdPull={10}>
    {
      props.photos.map(photo => (
        <Col className='thumb' lg={12} md={12} sm={2} xs={3} key={photo.id} onClick={() => props.setImage(photo)}>
          <Col componentClass='img'
            src={photo.image_url}
            alt={photo.name}
            title={photo.name + '\n \u2013 ' + photo.user.username}
          />

          <div className='title'>{photo.name + ' \u2013 ' + photo.user.username}</div>
        </Col>
      ))
    }
  </Col>
)

export default Thumbnails

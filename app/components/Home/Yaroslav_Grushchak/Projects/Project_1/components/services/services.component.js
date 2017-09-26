import React from 'react'
import { Grid, Row } from 'react-bootstrap'

// import './services.component.css';
import './services.component.styl'
import ServicesItem from '../services-item/services-item.component'

import services from '../../shared/services.data'

const Services = () => (
  <Grid fluid className='services'>

    <a id='services' />

    <Grid componentClass='section'>
      <h2 className='stn-heading'>Services</h2>

      <Row>
        {services.map(elem =>
          <ServicesItem
            key={elem.id}
            class_name={elem.class_name}
            title={elem.title}
            text={elem.text} />
        )}
      </Row>
    </Grid>
  </Grid>
)

export default Services

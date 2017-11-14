import React from 'react'
import {Button} from 'react-bootstrap'

import './pagination.component.styl'

const Pagination = props => (
  <div className='pagination'>
    <Button className='prev'
            bsStyle='primary'
            style={props.current_page === 1 ? {display: 'none'} : null}
            onClick={() => props.request(props.current_page - 1)} >
      Prev page
    </Button>

    <Button className='next'
            bsStyle='primary'
            style={props.current_page === props.total_pages ? {display: 'none'} : null}
            onClick={() => props.request(props.current_page + 1)} >
      Next page
     </Button>
  </div>
)

export default Pagination

import React from 'react'
import 'react-bootstrap/lib/Grid'

import './App.styl'

class Project_2 extends React.Component {
  constructor () {
    super()
    this.state = {
      current_page: 1,
      total_items: 1,
      photos: []
    }
  }

  componentWillMount () {
    this.request()
  }

  request () {
    fetch('https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF&page=2')
      .then(response => {
        return response.json()
      })
      .then(content => {
        // console.log(content.photos[0])
        this.setState({
          current_page: content.current_page,
          total_items: content.total_items,
          photos: content.photos
        })
      })
      .catch(error => {
        alert(error)
      })
  }

  render () {
    if (this.state.photos.length > 0) {
      return (
        this.state.photos.map(photo => (
          <div key={photo.id}>
            <div>{photo.name}</div>
            <img src={photo.image_url} alt={photo.name} style={{width: 300}} />
          </div>
        ))
      )
    }

    return 'Photos is being loaded...'
  }
}

export default Project_2

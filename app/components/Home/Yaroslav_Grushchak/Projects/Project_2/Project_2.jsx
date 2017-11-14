import React from 'react'
// import 'react-bootstrap/lib/Grid'
import { Grid, Col } from 'react-bootstrap'

import MainImage from './components/main-image/main-image.component'
import Thumbnails from './components/thumbnails/thumbnails.component'
import Pagination from './components/pagination/pagination.component'

import './App.styl'

class Project_2 extends React.Component {
  constructor () {
    super()
    this.state = {
      current_page: 1,
      total_pages: 1,
      photos: []
    }
  }

  componentWillMount () {
    this.request()

    window.addEventListener('resize', () => {
      this.setContainerHeight()
    })
  }

  setContainerHeight () {
    let windowHeight = document.documentElement.clientHeight
    let menuHeight = document.getElementsByClassName('navigationLinks')[0].offsetHeight
    let galleryHeight = windowHeight - menuHeight

    document.getElementById('gallery-container').style.height = galleryHeight + 'px'
  }

  request (page) {
    fetch('https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF' + (page ? ('&page=' + page) : ''))
      .then(response => {
        return response.json()
      })
      .then(content => {
        this.setState({
          current_page: content.current_page,
          total_pages: content.total_pages,
          photos: content.photos,
          mainImg: content.photos[0]
        })

        this.setContainerHeight()
      })
      .catch(error => {
        alert(error)
      })
  }

  setImage (photo) {
    this.setState({mainImg: photo})
  }

  render () {
    if (this.state.photos.length > 0) {
      return (
        <Grid fluid id='gallery-container'>
          <MainImage mainImg={this.state.mainImg} />

          <Thumbnails photos={this.state.photos}
                      setImage={this.setImage.bind(this)} />

          <Pagination current_page={this.state.current_page}
                      total_pages={this.state.total_pages}
                      request={this.request.bind(this)} />
        </Grid>
      )
    }

    return 'Photos is being loaded...'
  }
}

export default Project_2

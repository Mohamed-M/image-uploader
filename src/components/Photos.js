import React, { Component } from 'react';

import './Photos.scss';

class Photos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }

  fetchUsers() {
    let query = 'ottawa';
    fetch('https://api.unsplash.com/search/photos?query=computers&client_id=09e1946c3dc534d26877befe7f673e56388cb062db9f820af31bf4ae3515101d')
      .then(res => res.json())
      .then(data => {
        this.setState({ photos: data.results })
        console.log(this.state.photos)
      })
      .catch((error) => console.log(error))
  }

  componentDidMount() {
    this.fetchUsers();
  }


  render() {

    let photos = this.state.photos.map((photo, index) => {
      return (
        <div className="card" key={index}>
          <img className="card-img-top" src={photo.urls.small} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text"><strong>Title: </strong>{photo.description ? `${photo.description}` : `${photo.alt_description}`}</p>
            <span class="badge badge-pill badge-dark mr-1">{photo.tags[0].title}</span>
            <span class="badge badge-pill badge-dark mr-1">{photo.tags[1].title}</span>
            <span class="badge badge-pill badge-dark">{photo.tags[2].title}</span>
          </div>
        </div>
      )
    })

    return (
      <div className="container">
        <h1 className="display-4 mt-5 mb-4">Photos</h1>
        <div className="photos-container">
          {photos}
        </div>
      </div>
    )
  }
}

export default Photos;
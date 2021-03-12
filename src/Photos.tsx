import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Photo } from './actions/types'
import './Albums.scss'
import './Photos.scss'

interface PropTypes {
  photos: Photo[],
  history: any
}

class Photos extends Component<PropTypes, PropTypes>  {
  handleClick(photoId: string) {

  }
  
  render() {
    const { photos } = this.props;
    if (photos.length === 0) return null;

    return (
      <div className="photos-container">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-container" onClick={this.handleClick.bind(this, photo.id)}>
            <img alt={photo.title} src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`}/>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps (state: any) {
  return {
    photos: state.photos.photos,
  }
}

export default connect(mapStateToProps, {})(Photos)


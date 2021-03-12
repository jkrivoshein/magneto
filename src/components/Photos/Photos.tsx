import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPhoto } from '../../actions'
import { Photo } from '../../actions/types'
import './Photos.scss'


interface PropTypes {
  photos: Photo[],
  history: any,
  location: {
    pathname: string
  },
  getPhoto: (arg0: Photo) => any
}

class Photos extends Component<PropTypes, PropTypes>  {
  handleClick(photo: Photo) {
    this.props.getPhoto(photo)
    this.props.history.push(`${this.props.location.pathname}/${photo.id}`)
  }
  
  render() {
    const { photos } = this.props;
    if (photos.length === 0) return null;

    return (
      <div className="photos-container">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-container" onClick={this.handleClick.bind(this, photo)}>
            <img alt={photo.title} src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`}/>
            <div className="photo-text-container">
              <p>{photo.title}</p>
            </div>
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

export default connect(mapStateToProps, { getPhoto })(Photos)


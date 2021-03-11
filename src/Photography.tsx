import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getPhotos } from './actions';
import { Photo } from './actions/types'

interface PropTypes {
 photos: Photo[],
 getPhotos: () => any
}

class Photography extends Component<PropTypes, PropTypes>  {
  componentDidMount() {
    this.props.getPhotos()
  }
  render() {
    const { photos } = this.props;
    if (photos.length === 0) return null;
    return (
      <div className="">
        <h1>Photography</h1>
        {photos.map((photo) => <div key={photo.id}>{photo.title}</div>)}
      </div>
    );
  }
}

function mapStateToProps (state: any) {
  return {
    photos: state.photos.photos
  }
}

export default connect(mapStateToProps, { getPhotos })(Photography)


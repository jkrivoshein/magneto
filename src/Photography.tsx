import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getPhotos, getAlbums } from './actions';
import { Photo, Album } from './actions/types'
import './Photography.scss'

interface PropTypes {
 photos: Photo[],
 albums: Album[],
 getPhotos: () => any
 getAlbums: () => any
}

class Photography extends Component<PropTypes, PropTypes>  {
  componentDidMount() {
    // this.props.getPhotos()
    this.props.getAlbums()
  }
  render() {
    const { photos, albums } = this.props;
    if (albums.length === 0) return null;
    console.log(albums)
    return (
      <div className="albums-container">
        {albums.map((album) => (
          <div key={album.id} className="album-container  " >
            <img src={`https://live.staticflickr.com/${album.server}/${album.primary}_${album.secret}_n.jpg`}/>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps (state: any) {
  return {
    photos: state.photos.photos,
    albums: state.photos.albums,
  }
}

export default connect(mapStateToProps, { getPhotos, getAlbums })(Photography)


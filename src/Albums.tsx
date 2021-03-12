import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPhotos, getAlbums } from './actions';
import { Photo, Album } from './actions/types'
import './Albums.scss'

interface PropTypes {
  albums: Album[],
  photos: Photo[],
  getPhotos: (arg0: string) => any,
  getAlbums: () => any,
  history: any
}

class Albums extends Component<PropTypes, PropTypes>  {
  componentDidMount() {
    this.props.getAlbums()
  }

  handleClick(albumId: string) {
    this.props.history.push(`/photography/album/${albumId}`)
    this.props.getPhotos(albumId)
  }
  
  render() {
    const { albums } = this.props;
    if (albums.length === 0) return null;

    return (
      <div className="albums-container">
        {albums.map((album) => (
          <div key={album.id} className="album-container" onClick={this.handleClick.bind(this, album.id)}>
            <img alt={album.title._content} src={`https://live.staticflickr.com/${album.server}/${album.primary}_${album.secret}_q.jpg`}/>
            <div className="album-text-container">
                <h3>{album.title._content}</h3>
                <p>{album.description._content}</p>
              </div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps (state: any) {
  return {
    albums: state.photos.albums,
  }
}

export default connect(mapStateToProps, { getPhotos, getAlbums })(Albums)


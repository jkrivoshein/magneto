import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Photo } from '../../actions/types'
import { getPhotoInfo } from '../../actions'
import './Lightbox.scss'

interface PropTypes {
  photo: Photo,
  history: any,
  getPhotoInfo: (arg0: string) => any,
  location: any,
}

class Lightbox extends Component<PropTypes, PropTypes> {
  componentDidMount() {
    if (this.props.photo && this.props.photo.id)
      return
    const photoId = this.props.location.pathname.split('/')[4]
    this.props.getPhotoInfo(photoId)
  }

  onCloseClick() {
    this.props.history.goBack()
  }

  render () {
    const { photo } = this.props
    if (!photo || !photo.id) return null

    return (
      <div>
        <div className="photo-wrapper" onClick={this.onCloseClick.bind(this)}>
          <div className='photo-main'>
            <div className='photo-content'>
              <img alt={photo.title} max-width="90vw" src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state: any) {
  return {
    photo: state.photos.photo,
  }
}

export default connect(mapStateToProps, {getPhotoInfo})(Lightbox)

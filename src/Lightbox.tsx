import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Photo } from './actions/types'
import './Lightbox.scss'

interface PropTypes {
  photo: Photo,
  history: any,
}

class Lightbox extends Component<PropTypes, PropTypes> {

  onCloseClick() {
    this.props.history.goBack()
  }

  render () {
    const { photo } = this.props
    if (!photo) return null

    return (
      <div>
        <div className="photo-wrapper" onClick={this.onCloseClick.bind(this)}>
          <div className='photo-main'>
            <div className='photo-content'>
              <img alt={photo.title} src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`} />
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

export default connect(mapStateToProps, {})(Lightbox)

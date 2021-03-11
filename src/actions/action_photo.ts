
import { GET_PHOTOS } from './types'

export function getPhotos() {
    // use existing state first?
    return {
      type: GET_PHOTOS,
      payload: {
        request: {
          url: 'https://soundcloud.com/oembed?format=json&url=http%3A//www.soundcloud.com/djlodestone'
        }
      },
    }
}

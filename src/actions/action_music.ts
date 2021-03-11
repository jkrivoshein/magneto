
import { GET_TRACKS } from './types'

export function getTracks() {
    // use existing state first?
    return {
      type: GET_TRACKS,
      payload: {
        request: {
          url: 'https://soundcloud.com/oembed?format=json&url=http%3A//www.soundcloud.com/djlodestone'
        }
      },
    }
}

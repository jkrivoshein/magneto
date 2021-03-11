
import { GET_TRACKS } from './types'

const soundCloudClientId = 'dmDh7QSlmGpzH9qQoH1YExYCGcyYeYYC'

export function getTracks() {
    return {
      type: GET_TRACKS,
      payload: {
        request: {
          url: 'https://soundcloud.com/oembed?format=json&url=http%3A//www.soundcloud.com/djlodestone'
        }
      },
    }
}

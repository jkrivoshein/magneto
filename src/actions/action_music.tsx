
import { GET_TRACKS, MusicActionTypes } from './types'

// TypeScript infers that this function is returning SendMessageAction
export function getTracks(): MusicActionTypes {
  return {
    type: GET_TRACKS,
    // payload: []
  }
}

import {
  GET_TRACKS,
  MusicActionTypes,
  Tracks
} from '../actions/types'

const initialState: Tracks = {
  tracks: []
}

export default function musicReducer(
  state = initialState,
  action: MusicActionTypes
): Tracks {
  switch (action.type) {
    case GET_TRACKS:
      console.log('tracks')
      return {
        tracks: []
      }
    
    default:
      return state
  }
}

import {
  GET_TRACKS_SUCCESS,
  MusicActionTypes,
  Track
} from '../actions/types'


export const initialState: Track = {
  author_name: '',
  author_url: '',
  description: '',
  height: 0,
  html: '',
  provider_name: '',
  provider_url: '',
  thumbnail_url: '',
  title: '',
  type: '',
  version: 0,
  width: '',
}

export default function musicReducer(
  state = initialState,
  action: MusicActionTypes
): Track {

  switch (action.type) {
    case GET_TRACKS_SUCCESS:
      console.log(action)
      return {
        ...action.payload.data
      }
    
    default:
      return state
  }
}

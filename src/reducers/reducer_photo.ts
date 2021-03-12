import {
  GET_PHOTOS_SUCCESS,
  GET_ALBUMS_SUCCESS,
  PhotoActionTypes,
  PhotoState,

} from '../actions/types'


export const initialState: PhotoState = {
  photos: [],
  albums: []
}

export default function musicReducer (
  state = initialState,
  action: PhotoActionTypes
): PhotoState {
  switch (action.type) {
    case GET_PHOTOS_SUCCESS:
      return {
        photos: action.payload.data.photos.photo,
        albums: state.albums
      }

    case GET_ALBUMS_SUCCESS:
      return {
        photos: state.photos,
        albums: action.payload.data.photosets.photoset
      }
    
    default:
      return state
  }
}

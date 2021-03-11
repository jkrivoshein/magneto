import {
  GET_PHOTOS_SUCCESS,
  PhotoActionTypes,
  Photos
} from '../actions/types'


export const initialState: Photos = {
  photos: []
}

export default function musicReducer (
  state = initialState,
  action: PhotoActionTypes
): Photos {
  switch (action.type) {
    case GET_PHOTOS_SUCCESS:
      return {
        photos: action.payload.data.photos.photo
      }
    
    default:
      return state
  }
}

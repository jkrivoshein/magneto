import {
  GET_PHOTO,
  GET_PHOTOS,
  GET_PHOTOS_SUCCESS,
  GET_ALBUMS_SUCCESS,
  PhotoActionTypes,
  PhotoState,
  Photo,
} from '../actions/types'


const initialPhoto: Photo = {
  id: '',
  owner: '',
  secret: '',
  server: '',
  farm: 0,
  title: '',
  ispublic: 0,
  isfriend: 0,
  isfamily: 0
}

export const initialState: PhotoState = {
  photos: [],
  albums: [],
  photo: initialPhoto
}

export default function musicReducer (
  state = initialState,
  action: PhotoActionTypes
): PhotoState {
  switch (action.type) {
    case GET_PHOTO:
      return {
        photo: action.payload.data,
        photos: state.photos,
        albums: state.albums
      }
    case GET_PHOTOS:
      return {
        photo: initialPhoto,
        photos: [],
        albums: state.albums
      }

    case GET_PHOTOS_SUCCESS:
      return {
        photo: initialPhoto,
        photos: action.payload.data.photoset.photo,
        albums: state.albums
      }
    
    case GET_ALBUMS_SUCCESS:
      return {
        photo: initialPhoto,
        photos: state.photos,
        albums: action.payload.data.photosets.photoset
      }
    default:
      return state
  }
}

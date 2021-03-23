
import {
  GET_PHOTO,
  GET_PHOTOS,
  GET_ALBUMS
} from './types'
import { Photo } from './types'

export function getPhotos(albumId: string) {
  return {
    type: GET_PHOTOS,
    payload: {
      request: {
        url: `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=ed1e81b9df15bc0e50ff6efb7803d54f&photoset_id=${albumId}&user_id=10434793%40N00&format=json&nojsoncallback=1`,
      }
    },
  }
}

export function getAlbums() {
  return {
    type: GET_ALBUMS,
    payload: {
      request: {
        url: 'https://www.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=ed1e81b9df15bc0e50ff6efb7803d54f&user_id=10434793%40N00&format=json&nojsoncallback=1',
      }
    },
  }
}

export function getPhoto(photo: Photo) {
  return {
    type: GET_PHOTO,
    payload: {
      data: photo
    }
  }
}

export function getPhotoInfo(photoId: string) {
  return {
    type: GET_PHOTO,
    payload: {
      request: {
        url: `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=ed1e81b9df15bc0e50ff6efb7803d54f&photo_id=${photoId}&format=json&nojsoncallback=1`,
      }
    },
  }
}

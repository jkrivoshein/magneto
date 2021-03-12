
import {
  GET_PHOTOS,
  GET_ALBUMS
} from './types'

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

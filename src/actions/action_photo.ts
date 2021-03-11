
import { GET_PHOTOS } from './types'

export function getPhotos() {
    // use existing state first?
    return {
      type: GET_PHOTOS,
      payload: {
        request: {
          url: 'https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=ed1e81b9df15bc0e50ff6efb7803d54f&user_id=10434793%40N00&format=json&nojsoncallback=1',
        }
      },
    }
}

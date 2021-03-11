export const GET_PHOTOS = 'GET_PHOTOS'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'
interface Photo {
  id: string,
  owner: string,
  secret: string,
  server: string,
  farm: number,
  title: string,
  ispublic: number,
  isfriend: number,
  isfamily: number
}

export interface Photos {
  photos: Photo[]
}

interface getPhotosAction {
  type: typeof GET_PHOTOS_SUCCESS
  payload: any
}

export type PhotoActionTypes = getPhotosAction

export const GET_PHOTOS = 'GET_PHOTOS'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'
//{ "id": "50640124776", "owner": "10434793@N00", "secret": "7f91cdfec7", "server": "65535", "farm": 66, "title": "Greenlake Reflection (portfolio candidate)", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
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

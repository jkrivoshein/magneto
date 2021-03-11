export const GET_TRACKS = 'GET_TRACKS'
export const GET_TRACKS_SUCCESS = 'GET_TRACKS_SUCCESS'

export interface Track {
  author_name: string,
  author_url: string,
  description: string,
  height: number,
  html: string,
  provider_name: string,
  provider_url: string,
  thumbnail_url: string,
  title: string,
  type: string,
  version: number,
  width: string
}

interface getTracksAction {
  type: typeof GET_TRACKS_SUCCESS
  payload: any
}

export type MusicActionTypes = getTracksAction

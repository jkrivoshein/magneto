export const GET_TRACKS = 'GET_TRACKS'

interface Track {
  user: string,
  title: string,
  player: () => void
}

export interface Tracks {
  tracks: Track[]
}

interface getTracksAction {
  type: typeof GET_TRACKS
  // payload: Tracks
}

export type MusicActionTypes = getTracksAction

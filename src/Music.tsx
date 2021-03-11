import React, { useEffect,  } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {getTracks} from './actions'
import rootReducer from './reducers';
import musicReducer from './reducers/reducer_music';

const Music = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTracks())
  })


    console.log('music')
  return (
    <div className="">
      <h1>Music</h1>
      <iframe width="100%" height="450" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F3799123&show_artwork=true"></iframe>
    </div>
  );
}
export default Music;

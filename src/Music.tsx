import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import {getTracks} from './actions'

const Music = () => {
  // const [] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTracks())
  })
  return (
    <div className="">
      <h1>Music</h1>
    </div>
  );
}
export default Music;

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPhotos } from './actions';

const Photography = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPhotos())
  })
  return (
    <div className="">
      <h1>Photography</h1>
    </div>
  );
}
export default Photography;

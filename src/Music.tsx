import React, { useEffect } from 'react';
import './Music.scss';

const Music = () => {
  useEffect(() => {
    const frame = document.getElementsByTagName('iframe')[0]
    if (frame) {
      frame.setAttribute('src', 'https://w.soundcloud.com/player/?visual=false&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F3799123&show_artwork=true')
      frame.setAttribute('title', 'Lodestone')
    }
  })
  
  return (
    <div className="music-list-container">
      <iframe width="100%" height="450" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F3799123&show_artwork=true"></iframe>
    </div>
  );
}
export default Music;

import React, { useState, useCallback } from 'react';
import ReactHowler from 'react-howler';
import './TileButton.css';

const TileButton = ({ musicPath, tileImg }) => {
  const [playing, setPlaying] = useState(false);

  const handlePlay = useCallback(() => {
    setPlaying(prevPlaying => !prevPlaying);
  }, []);

  return (
    <div>
      <ReactHowler
        src={musicPath}
        playing={playing}
        loop={true}
      />
      <button
        className={`custom-button ${playing ? 'highlighted' : ''}`}
        onClick={handlePlay}
        aria-label={"Custom Button" }
      >
        <img src={tileImg} alt="Custom Button" className="button-image" />
      </button>
    </div>
  );
};

export default TileButton

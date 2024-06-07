import React from 'react';
import TileButton from './TileButton';
import './MainPage.css'; 

const MainPage = () => {
  return (
    <div className="main-page">
      <img
        className='img'
        src="title.png"
        alt="Tile"
      />
      <div>
        <TileButton musicPath="music/music1.mp3" tileImg="images/Tile1.png"/>
        <TileButton musicPath="music/music2.mp3" tileImg="images/Tile2.png"/>
        <TileButton musicPath="music/music3.mp3" tileImg="images/Tile3.png"/>
        <TileButton musicPath="music/music4.mp3" tileImg="images/Tile4.png"/>
        <TileButton musicPath="music/music5.mp3" tileImg="images/Tile5.png"/>
        <TileButton musicPath="music/music6.mp3" tileImg="images/Tile6.png"/>
        <TileButton musicPath="music/music7.mp3" tileImg="images/Tile7.png"/> 
      </div>
      <div className="text-container">
        <p>Елань: сквозь Чернь</p>
        <p>by Екатерина Лебедева</p>
      </div>
    </div>
  );
};

export default MainPage;

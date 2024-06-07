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
        <TileButton musicPath="music/1music.mp3" tileImg="images/Tile1.png"/>
        <TileButton musicPath="music/2music.mp3" tileImg="images/Tile2.png"/>
        <TileButton musicPath="music/3music.mp3" tileImg="images/Tile3.png"/>
        <TileButton musicPath="music/4music.mp3" tileImg="images/Tile4.png"/>
        <TileButton musicPath="music/5music.mp3" tileImg="images/Tile5.png"/>
        <TileButton musicPath="music/6music.mp3" tileImg="images/Tile6.png"/>
        <TileButton musicPath="music/7music.mp3" tileImg="images/Tile7.png"/>
      </div>
      <div className="text-container">
        <p>Елань: сквозь Чернь</p>
        <p>by Екатерина Лебедева</p>
      </div>
    </div>
  );
};

export default MainPage;

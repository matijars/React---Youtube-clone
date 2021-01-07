import React from "react";
import "./Home.css";
import Chipsbar from "../chipsbar/Chipsbar";
import VideoItem from "../videoItem/VideoItem";

function Home() {
  return (
    <div className='home'>
      <Chipsbar />
      <div className='home__videoItemContainer'>
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
      </div>
    </div>
  );
}

export default Home;

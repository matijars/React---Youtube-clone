import React from "react";
import "./Home.css";
import Chipsbar from "../chipsbar/Chipsbar";
import VideoItem from "../videoItem/VideoItem";
import {VideoData} from "../../Data/VideoData";

function Home() {
  return (
    <div className='home'>
      <Chipsbar />
      <div className='home__videoItemContainer'>
        {VideoData.map(video =>
          <VideoItem key={video.id} title={video.title} avatar={video.avatar} image={video.image} gif={video.gif} link={video.link} channel={video.channel} views={video.views} age={video.age}/>
        )}
        
      </div>
    </div>
  );
}

export default Home;

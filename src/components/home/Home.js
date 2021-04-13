import React from "react";
import "./Home.css";
import Chipsbar from "../chipsbar/Chipsbar";
import VideoItem from "../videoItem/VideoItem";
import { VideoData } from "../../Data/VideoData";

const Home = ({ query }) => {
  return (
    <div className="home">
      <Chipsbar />
      <div className="home__videoItemContainer">
        {VideoData.filter((val) => {
          if (query == "") {
            return val;
          } else if (val.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) return val;
        }).map((video) => (
          <VideoItem
            key={video.id}
            title={video.title}
            avatar={video.avatar}
            image={video.image}
            gif={video.gif}
            link={video.link}
            channel={video.channel}
            views={video.views}
            age={video.age}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

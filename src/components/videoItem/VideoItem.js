import React from "react";
import "./VideoItem.css";

import MoreVertIcon from "@material-ui/icons/MoreVert";

function VideoItem() {
  return (
    <div className='videoItem'>
      <div className='videoItem__thumbnail'>
        <img src='https://source.unsplash.com/random' alt='' />
      </div>
      <div className='videoItem__bottom'>
        <div className='videoItem__bottom__left'>
          <img src='https://i.pravatar.cc/36' alt='Random Avatar' className='avatar' />
        </div>
        <div className='videoItem__bottom__middle'>
          <h4 className='videoItem__title'>Winter | Beautiful Chill Mix</h4>
          <p className='videoItem__channel'>Music Lab</p>
          <span className='videoItem__views'>873K views</span>
          <span className='videoItem__age'>2 months ago</span>
        </div>
        <div className='videoItem__bottom__right'>
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
}

export default VideoItem;

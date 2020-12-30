import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.css";
import "./SidebarOption.css";

import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__section'>
        <NavLink to='/' exact className='sidebarOption' activeClassName='sidebarOption--active'>
          <HomeIcon />
          <span>Home</span>
        </NavLink>
        <NavLink to='/trending' className='sidebarOption' activeClassName='sidebarOption--active'>
          <WhatshotIcon />
          <span>Trending</span>
        </NavLink>
        <NavLink
          to='/subscriptions'
          className='sidebarOption'
          activeClassName='sidebarOption--active'
        >
          <SubscriptionsIcon />
          <span>Subscriptions</span>
        </NavLink>
      </div>
      <div className='sidebar__section'>
        <NavLink to='/library' className='sidebarOption' activeClassName='sidebarOption--active'>
          <VideoLibraryIcon />
          <span>Library</span>
        </NavLink>
        <NavLink to='/history' className='sidebarOption' activeClassName='sidebarOption--active'>
          <HistoryIcon />
          <span>History</span>
        </NavLink>
        <NavLink
          to='/watch-later'
          className='sidebarOption'
          activeClassName='sidebarOption--active'
        >
          <WatchLaterIcon />
          <span>Watch later</span>
        </NavLink>
        <NavLink
          to='/liked-videos'
          className='sidebarOption'
          activeClassName='sidebarOption--active'
        >
          <ThumbUpIcon />
          <span>Liked videos</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;

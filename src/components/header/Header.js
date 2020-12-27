import React from "react";
import "./Header.css";

import Logo from "../../img/youtube-logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={Logo} alt='Youtube Logo' className='headerLogo' />
      </div>
      <div className='header__middle'>
        <input type='text' placeholder='Search' />
        <button className='header__searchBtn'>
          <SearchIcon />
        </button>
      </div>
      <div className='header__right'>
        <IconButton>
          <VideoCallIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <AccountCircleIcon className='headerAvatar' />
      </div>
    </div>
  );
}

export default Header;

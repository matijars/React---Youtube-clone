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

import Music from "../../img/music.jpg";
import Sports from "../../img/sports.jpg";
import Gaming from "../../img/gaming.jpg";
import News from "../../img/news.jpg";

import YouTubeIcon from "@material-ui/icons/YouTube";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import WifiTetheringIcon from "@material-ui/icons/WifiTethering";

import SettingsIcon from "@material-ui/icons/Settings";
import FlagIcon from "@material-ui/icons/Flag";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";

function Sidebar() {
  let sidebarFooterLinksUp = [
    "About",
    "Press",
    "Copyright",
    "Contact us",
    "Creators",
    "Advertise",
    "Developers",
  ];

  let sidebarFooterLinksBot = [
    "Terms",
    "Privacy",
    "Policy & Safety",
    "How YouTube works",
    "Test new features",
  ];

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
      <div className='sidebar__section sidebar-hide'>
        <h4 className='sidebarTitle'>Best of YouTube</h4>
        <NavLink
          to='/music'
          exact
          className='sidebarOption'
          activeClassName='sidebarOption--active'
        >
          <img src={Music} alt='' />
          <span>Music</span>
        </NavLink>
        <NavLink to='/sports' className='sidebarOption' activeClassName='sidebarOption--active'>
          <img src={Sports} alt='' />
          <span>Sports</span>
        </NavLink>
        <NavLink
          to='/gaming'
          exact
          className='sidebarOption'
          activeClassName='sidebarOption--active'
        >
          <img src={Gaming} alt='' />
          <span>Gaming</span>
        </NavLink>
        <NavLink to='/news' exact className='sidebarOption' activeClassName='sidebarOption--active'>
          <img src={News} alt='' />
          <span>News</span>
        </NavLink>
      </div>
      <div className='sidebar__section sidebar-hide'>
        <h4 className='sidebarTitle'>More from YouTube</h4>
        <NavLink to='/premium' className='sidebarOption' activeClassName='sidebarOption--active'>
          <YouTubeIcon />
          <span>YouTube Premium</span>
        </NavLink>
        <NavLink
          to='/best-of-gaming'
          className='sidebarOption'
          activeClassName='sidebarOption--active'
        >
          <SportsEsportsIcon />
          <span>Gaming</span>
        </NavLink>
        <NavLink to='/live' className='sidebarOption' activeClassName='sidebarOption--active'>
          <WifiTetheringIcon />
          <span>Live</span>
        </NavLink>
      </div>
      <div className='sidebar__section sidebar-hide'>
        <NavLink to='/settings' className='sidebarOption' activeClassName='sidebarOption--active'>
          <SettingsIcon />
          <span>Settings</span>
        </NavLink>
        <NavLink
          to='/report-history'
          className='sidebarOption'
          activeClassName='sidebarOption--active'
        >
          <FlagIcon />
          <span>Report history</span>
        </NavLink>
        <NavLink to='/help' className='sidebarOption' activeClassName='sidebarOption--active'>
          <HelpIcon />
          <span>Help</span>
        </NavLink>
        <NavLink to='/feedback' className='sidebarOption' activeClassName='sidebarOption--active'>
          <FeedbackIcon />
          <span>Send feedback</span>
        </NavLink>
      </div>
      <div className='sidebar__section sidebar__footer sidebar-hide'>
        {sidebarFooterLinksUp.map((link, index) => {
          return (
            <span className='sidebarFooter__link' key={index}>
              {link}
            </span>
          );
        })}
        <br></br>
        <br></br>
        {sidebarFooterLinksBot.map((link, index) => {
          return (
            <span className='sidebarFooter__link' key={index}>
              {link}
            </span>
          );
        })}

        <span className='sidebarCopyright'>© 2020 Google LLC</span>
      </div>
    </div>
  );
}

export default Sidebar;

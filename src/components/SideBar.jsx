import React from 'react';
import '../styles/sidebar.css';
import logo from '../assets/Logo.png';
import home from '../assets/Home.png';
import contentIcon from '../assets/Content_View_Gallery.png';
import settingsIcon from '../assets/Settings.png';
import logoutIcon from '../assets/Logout.png';

const SideBar = () => (
  <div className="side-bar-container">
    <img className="sidebar-logo" src={logo} alt="logo" />
    <div className="sidebar-icons-container">
      <div className="sidebar-icons-upper">
        <img className="sidebar-icons" src={home} alt="logo" />
        <img className="sidebar-icons" src={contentIcon} alt="home" />
      </div>
      <div className="sidebar-icons-lower">
        <img className="sidebar-icons" src={settingsIcon} alt="settings" />
        <img className="sidebar-icons" src={logoutIcon} alt="logout" />
      </div>
    </div>
  </div>
);

export default SideBar;

import React, { useEffect } from 'react';
import '../styles/sidebar.css';
import { signOut } from 'firebase/auth';
import logo from '../assets/Logo.png';
import home from '../assets/Home.png';
import contentIcon from '../assets/Content_View_Gallery.png';
import settingsIcon from '../assets/Settings.png';
import logoutIcon from '../assets/Logout.png';
import { auth } from '../config/firebase';

const SideBar = () => {
  useEffect(() => {
    const sidebar = document.querySelector('.side-bar-container');
    sidebar.classList.add('active');
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="side-bar-container">
      <img className="sidebar-logo" src={logo} alt="logo" />
      <div className="sidebar-icons-container">
        <div className="sidebar-icons-upper">
          <img className="sidebar-icons" src={home} alt="logo" />
          <img className="sidebar-icons" src={contentIcon} alt="home" />
        </div>
        <div className="sidebar-icons-lower">
          <img className="sidebar-icons" src={settingsIcon} alt="settings" />
          <button type="button" onClick={handleLogout}>
            <img className="sidebar-icons" src={logoutIcon} alt="logout" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

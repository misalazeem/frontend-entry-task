import React, { useEffect, useState } from 'react';
import '../styles/navbar.css';
import search from '../assets/Search.png';
import search1 from '../assets/SearchBar1.png';
import search2 from '../assets/SearchIcon2.png';
import groupIcons from '../assets/Group.png';
import bellIcon from '../assets/Bell.png';
import calendarIcon from '../assets/Calendar.png';
import avatar from '../assets/Avatar.png';

const NavBarLeft = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Delay the fade-in effect
    const delayTimeout = setTimeout(() => {
      setShow(true);
    }, 2000); // 2-second delay

    // Clear the timeout to prevent memory leaks
    return () => {
      clearTimeout(delayTimeout);
    };
  }, []);

  return (
    <>
      <div className={`nav-bar-left ${show ? 'fade-in' : ''}`}>
        <div className="search-container-top">
          <input type="text" className="search-input-top" placeholder="Enter a city or land" />
          <span className="search-icon-top">
            <img src={search} alt="search-icon" />
          </span>
          <span className="search-icon-top-right">
            <img src={search1} alt="search-icon-1" />
          </span>
          <span className="search-icon-top-right-2">
            <img src={search2} alt="search-icon-2" />
          </span>
        </div>
        <div className="nav-bar-left-right">
          <button alt="button" type="button">Create Content</button>
          <div className="group-image-container">
            <img src={groupIcons} className="group-icons" alt="groupicons" />
          </div>
        </div>
      </div>
      <div className={`nav-bar-right ${show ? 'fade-in' : ''}`}>
        <img src={calendarIcon} alt="calendar" />
        <img src={bellIcon} alt="calendar" />
        <img src={avatar} alt="calendar" />
      </div>
    </>
  );
};

export default NavBarLeft;

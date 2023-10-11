import React, { useEffect, useState } from 'react';
import '../styles/navbar.css';
import PropTypes from 'prop-types';
import search from '../assets/Search.png';
import search1 from '../assets/SearchBar1.png';
import search2 from '../assets/SearchIcon2.png';
import groupIcons from '../assets/Group.png';
import bellIcon from '../assets/Bell.png';
import calendarIcon from '../assets/Calendar.png';
import Auth from '../auth/auth';

const NavBarLeft = ({ onSignOut }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setShow(true);
    }, 2000);

    return () => {
      clearTimeout(delayTimeout);
    };
  }, []);

  const handleSignOut = () => {
    onSignOut();
  };

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
          <button alt="button" type="button">
            Create Content
          </button>
          <div className="group-image-container">
            <img src={groupIcons} className="group-icons" alt="groupicons" />
          </div>
        </div>
      </div>
      <div className={`nav-bar-right ${show ? 'fade-in' : ''}`}>
        <img src={calendarIcon} alt="calendar" />
        <img src={bellIcon} alt="bell" />
        <Auth onSignOut={handleSignOut} />
      </div>
    </>
  );
};

NavBarLeft.propTypes = {
  onSignOut: PropTypes.func,
};

NavBarLeft.defaultProps = {
  onSignOut: () => {},
};

export default NavBarLeft;

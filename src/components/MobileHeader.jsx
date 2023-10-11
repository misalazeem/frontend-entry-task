import React from 'react';
import menuIcon from '../assets/Frame.svg';
import avatar from '../assets/Avatar.png';
import search from '../assets/Search.png';
import plusIcon from '../assets/PlusIcon.png';
import '../styles/mobileheader.css';

const MobileHeader = () => (
  <>
    <div className="mobile-header active">
      <div className="header-container">
        <div className="header-user-section">
          <img className="menu-icon" src={menuIcon} alt="menu" />
          <select className="user-dropdown">
            <option value="option2" selected>Zara ventures</option>
          </select>
          <img src={avatar} alt="avatar" />
        </div>
        <h2>Hey James!</h2>
        <p>Lets create something awesome today ✨💫</p>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Enter a city or land" />
          <span className="search-icon">
            <img src={search} alt="search-icon" />
          </span>
        </div>
      </div>
    </div>
    <div className="plusicon">
      <img src={plusIcon} alt="plusicon" />
    </div>
  </>
);

export default MobileHeader;

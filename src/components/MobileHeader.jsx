import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import PropTypes from 'prop-types';
import menuIcon from '../assets/Frame.svg';
import search from '../assets/Search.png';
import plusIcon from '../assets/PlusIcon.png';
import '../styles/mobileheader.css';
import Auth from '../auth/auth';

const MobileHeader = ({ onSignOut }) => {
  const [currentUser, setcurrentUser] = useState(null);
  const [selectedValue, setSelectedValue] = useState('option2');

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setcurrentUser(currentUser);
      } else {
        setcurrentUser(null);
      }
    });
  }, []);

  const updateUser = (newUser) => {
    setcurrentUser(newUser);
  };

  const handleSignOut = () => {
    onSignOut();
  };

  return (
    <>
      <div className="mobile-header active">
        <div className="header-container">
          <div className="header-user-section">
            <img className="menu-icon" src={menuIcon} alt="menu" />
            <select
              className="user-dropdown"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Zara ventures</option>
              <option value="option3">Option 3</option>
            </select>
            <Auth onSignIn={updateUser} onSignOut={handleSignOut} />
          </div>
          <h2>
            Hey
            {' '}
            {currentUser ? currentUser.displayName : 'Guest'}
            !
          </h2>
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
};

MobileHeader.propTypes = {
  onSignOut: PropTypes.func,
};

MobileHeader.defaultProps = {
  onSignOut: () => {},
};

export default MobileHeader;

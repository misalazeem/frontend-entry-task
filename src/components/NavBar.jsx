import React from 'react';
import '../styles/navbar.css';
import PropTypes from 'prop-types';
import NavBarLeft from './NavBarLeft';

const NavBar = ({ user, onSignOut }) => (
  <div className="top-nav-container">
    <NavBarLeft user={user} onSignOut={onSignOut} />
  </div>
);

NavBar.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  onSignOut: PropTypes.func,
};

NavBar.defaultProps = {
  user: null,
  onSignOut: () => {},
};

export default NavBar;

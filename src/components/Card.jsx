import React from 'react';
import '../styles/card.css';
import PropTypes from 'prop-types';

const Card = ({
  heading, iconPath, arrowIcon, content, isLoaded,
}) => (
  <div className={`card ${isLoaded ? 'fade-in' : ''}`}>
    <div className="card-top-icons">
      <img src={iconPath} alt="icon" />
      <img src={arrowIcon} alt="icon" />
    </div>
    <h5>{heading}</h5>
    <p>{content}</p>
  </div>
);

Card.propTypes = {
  heading: PropTypes.string.isRequired,
  iconPath: PropTypes.string.isRequired,
  arrowIcon: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

export default Card;

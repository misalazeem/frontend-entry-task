import React from 'react';
import '../styles/card.css';

const Card = ({
  heading, iconPath, arrowIcon, content,
}) => (
  <div className="card">
    <div className="card-top-icons">
      <img src={iconPath} alt="icon" />
      <img src={arrowIcon} alt="icon" />
    </div>
    <h5>{heading}</h5>
    <p>{content}</p>
  </div>
);

export default Card;

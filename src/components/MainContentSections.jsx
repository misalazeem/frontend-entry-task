import React from 'react';
import '../styles/maincontentsections.css';
import Card from './Card';

const MainContentSections = ({ heading, cardsData }) => (
  <div className="main-content-sections">
    <h4>{heading}</h4>
    <div className="card-container">
      {cardsData.map((section, index) => (
        <Card
          key={index}
          heading={section.heading}
          iconPath={section.iconPath}
          arrowIcon={section.arrowIcon}
          content={section.content}
        />
      ))}
    </div>
  </div>
);

export default MainContentSections;

import React, { useEffect, useState } from 'react';
import '../styles/maincontentsections.css';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';

const MainContentSections = ({ heading, cardsData }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <div className="main-content-sections">
      <h4 className={isLoaded ? 'fade-in' : ''}>{heading}</h4>
      <div className="card-container">
        {cardsData.map((section) => (
          <Card
            key={uuidv4()}
            heading={section.heading}
            iconPath={section.iconPath}
            arrowIcon={section.arrowIcon}
            content={section.content}
            isLoaded={isLoaded}
          />
        ))}
      </div>
    </div>
  );
};

MainContentSections.propTypes = {
  heading: PropTypes.string.isRequired,
  cardsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      iconPath: PropTypes.string.isRequired,
      arrowIcon: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MainContentSections;

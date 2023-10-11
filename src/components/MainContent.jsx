import React from 'react';
import '../styles/maincontent.css';
import { v4 as uuidv4 } from 'uuid';
import MainContentSections from './MainContentSections';
import editIcon from '../assets/Edit.png';
import arrowIcon from '../assets/Arrow.png';
import vectorIcon from '../assets/Vector.png';

const sectionsData = [
  {
    heading: 'Blog Writing',
    cardsData: [
      {
        heading: 'Blog writng',
        iconPath: editIcon,
        arrowIcon,
        content: 'Generate the best blog post to fit your audience with just few clicks of a button',
      },
      {
        heading: 'Card 2',
        iconPath: vectorIcon,
        arrowIcon,
        content: 'Generate the best blog post to fit your audience with just few clicks of a button',
      },
      {
        heading: 'Blog writng',
        iconPath: editIcon,
        arrowIcon,
        content: 'Generate the best blog post to fit your audience with just few clicks of a button',
      },
      {
        heading: 'Blog writng',
        iconPath: editIcon,
        arrowIcon,
        content: 'Generate the best blog post to fit your audience with just few clicks of a button',
      },
      {
        heading: 'Blog writng',
        iconPath: editIcon,
        arrowIcon,
        content: 'Generate the best blog post to fit your audience with just few clicks of a button',
      },
      {
        heading: 'Blog writng',
        iconPath: editIcon,
        arrowIcon,
        content: 'Generate the best blog post to fit your audience with just few clicks of a button',
      },
    ],
  },
  {
    heading: 'Social Media',
    cardsData: [
      {
        heading: 'Blog writng',
        iconPath: editIcon,
        arrowIcon,
        content: 'Generate the best blog post to fit your audience with just few clicks of a button',
      },
      {
        heading: 'Blog writng',
        iconPath: editIcon,
        arrowIcon,
        content: 'Generate the best blog post to fit your audience with just few clicks of a button',
      },
      {
        heading: 'Blog writng',
        iconPath: editIcon,
        arrowIcon,
        content: 'Generate the best blog post to fit your audience with just few clicks of a button',
      },
    ],
  },
];

const MainContent = () => (
  <>
    <div className="main-content-container">
      <div className="main-content-container-heading">
        <h3>Most Popular Tools</h3>
        <p>Explore the trending tools to create your copies fast</p>
      </div>
      {sectionsData.map((section) => (
        <MainContentSections
          key={uuidv4()}
          heading={section.heading}
          cardsData={section.cardsData}
        />
      ))}
    </div>
  </>
);

export default MainContent;

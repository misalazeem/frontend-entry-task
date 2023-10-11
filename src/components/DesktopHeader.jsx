import React from 'react';
import '../styles/desktopheader.css';

const DesktopHeader = () => (
  <div className="desktop-header">
    <div className="desktop-header-inner">
      <div className="desktop-header-left">
        <h2>Hey James!</h2>
        <p>Lets create something awesome today ✨💫</p>
        <button type="button" alt="button">Start Creating</button>
      </div>
      <div className="desktop-header-right">
        <select className="user-dropdown-desktop">
          <option value="option2" selected>Zara ventures</option>
        </select>
        <div className="text-section">
          <p>You should have more engagement by 6pm today, try posting then.  📆 </p>
          <p>Try our SEO optimization tool to increase engagement by 40% 🔥</p>
        </div>
      </div>
    </div>
  </div>
);

export default DesktopHeader;

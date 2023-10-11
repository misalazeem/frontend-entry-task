import React, { useEffect, useState } from 'react';
import '../styles/desktopheader.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const DesktopHeader = () => {
  const [user, setUser] = useState(null);
  const [selectedValue, setSelectedValue] = useState('option2');

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="desktop-header">
      <div className="desktop-header-inner">
        <div className="desktop-header-left">
          <h2>
            Hey
            {' '}
            {user ? user.displayName : 'Guest'}
            !
          </h2>
          <p>Lets create something awesome today ✨💫</p>
          <button type="button" alt="button">Start Creating</button>
        </div>
        <div className="desktop-header-right">
          <select
            className="user-dropdown-desktop"
            value={selectedValue}
            onChange={handleSelectChange}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Zara ventures</option>
            <option value="option3">Option 3</option>
          </select>
          <div className="text-section">
            <p>You should have more engagement by 6pm today, try posting then.  📆 </p>
            <p>Try our SEO optimization tool to increase engagement by 40% 🔥</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;

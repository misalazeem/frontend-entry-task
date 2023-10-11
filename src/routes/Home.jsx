import '../App.css';
import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import MobileHeader from '../components/MobileHeader';
import MainContent from '../components/MainContent';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import DesktopHeader from '../components/DesktopHeader';

const Home = () => {
  const [user, setUser] = useState(null);

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div className="main-container">
      <MobileHeader user={user} onSignOut={handleSignOut} />
      <SideBar user={user} onSignOut={handleSignOut} />
      <div className="right-page">
        <NavBar user={user} onSignIn={updateUser} onSignOut={handleSignOut} />
        <DesktopHeader />
        <MainContent />
      </div>
    </div>
  );
};

export default Home;

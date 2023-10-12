import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { onAuthStateChanged, signOut, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';
import googleIcon from '../assets/googleIcon.svg';
import avatar from '../assets/Avatar.png';

const Auth = ({ onSignIn, onSignOut }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
        onSignIn(authUser);
      } else {
        setUser(null);
        onSignOut();
      }
    });

    return () => {
      unsubscribe();
    };
  }, [onSignIn, onSignOut]);

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <>
      {user ? (
        <button type="button" className="user-avatar-button" onClick={handleSignOut}>
          <img className="user-avatar" src={user.photoURL || avatar} alt="User Avatar" />
        </button>
      ) : (
        <button type="button" className="login-button" onClick={signInWithGoogle}>
          <img src={googleIcon} alt="Google Icon" />
        </button>
      )}
    </>
  );
};

Auth.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired,
};

export default Auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDbp8-31mPaIkyIyz_N-5e_BCD8-rOAmW8',
  authDomain: 'fir-react-auth-3267f.firebaseapp.com',
  projectId: 'fir-react-auth-3267f',
  storageBucket: 'fir-react-auth-3267f.appspot.com',
  messagingSenderId: '705459619446',
  appId: '1:705459619446:web:20fc1b2c6fe131f6598157',
  measurementId: 'G-VDVJHFV35Q',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBFeOZa2XXxn7sVU7qBXksnZ_O2p8QFZj4",
  authDomain: "qchk-315ea.firebaseapp.com",
  projectId: "qchk-315ea",
  storageBucket: "qchk-315ea.firebasestorage.app",
  messagingSenderId: "274397392855",
  appId: "1:274397392855:web:de8623594ae2b9060ee592"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

export const testConnection = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'test'));
    console.log('Firestore connected successfully!');
    return true;
  } catch (error) {
    console.error('Firestore connection error:', error);
    return false;
  }
};

import { testConnection } from './firebase.js'; // Add the .js extension

const runTest = async () => {
  const isConnected = await testConnection();
  if (isConnected) {
    console.log('Connection to Firestore is successful!');
  } else {
    console.log('Failed to connect to Firestore.');
  }
};

runTest();
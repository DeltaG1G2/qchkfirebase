import { db } from './firebase.js'; // Import Firestore instance
import { collection, addDoc } from 'firebase/firestore';
import fs from 'fs';

// Function to create a new user in Firestore and save credentials locally
const createUser = async (username, password) => {
  try {
    // Add user to Firestore
    const docRef = await addDoc(collection(db, 'user'), {
      username: username,
      password: password
    });
    console.log('User added with ID: ', docRef.id);

    // Save credentials locally
    const credentials = `Username: ${username}\nPassword: ${password}\n`;
    fs.writeFileSync('user_credentials.txt', credentials);
    console.log('Credentials saved locally.');
  } catch (e) {
    console.error('Error adding user: ', e);
  }
};

// Example usage
createUser('exampleUser', 'examplePassword');
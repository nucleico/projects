import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyA2CVGZdaK_MsjiclBnkrsG__GcKD6OPUs',
  authDomain: 'basket-logger.firebaseapp.com',
  databaseURL: 'https://basket-logger.firebaseio.com',
  projectId: 'basket-logger',
  storageBucket: 'basket-logger.appspot.com',
  messagingSenderId: '868772339682',
  appId: '1:868772339682:web:a83ed8e9620596ebce63bb',
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
export const auth = fb.auth();

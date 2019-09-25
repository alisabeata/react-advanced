import firebase from 'firebase';

export const appName = '<DATABASE_NAME>';

export const firebaseConfig = {
  apiKey: '',
  authDomain: '<DATABASE_NAME>.firebaseapp.com',
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com',
  projectId: '<DATABASE_NAME>',
  storageBucket: '<DATABASE_NAME>.appspot.com',
  messagingSenderId: '',
  appId: ''
};

firebase.initializeApp(firebaseConfig);
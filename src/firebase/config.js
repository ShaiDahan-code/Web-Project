import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAVuYrR74605JMSiUugfbkkeA4h6kaFCYs",
    authDomain: "web-project-1fe17.firebaseapp.com",
    projectId: "web-project-1fe17",
    storageBucket: "web-project-1fe17.appspot.com",
    messagingSenderId: "642556700012",
    appId: "1:642556700012:web:b6b93358489326d8afbf49"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig);

  //init services
  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();

  //timestamp
  const timestamp = firebase.firestore.Timestamp;

  export { projectFirestore, projectAuth, timestamp};
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBz8f4Ouz5GtNfIGK2klUbJtosh9a2lZrk",
    authDomain: "firedemo-c5993.firebaseapp.com",
    databaseURL: "https://firedemo-c5993.firebaseio.com",
    projectId: "firedemo-c5993",
    storageBucket: "firedemo-c5993.appspot.com",
    messagingSenderId: "735091487207",
    appId: "1:735091487207:web:077f32648bfba1445d8d42"
  };
  const app=firebase.initializeApp(firebaseConfig);
  const db=app.firestore();
export default db;
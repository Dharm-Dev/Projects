import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyD1yFOqOiC68OYSmvO4pMfcwlXKnfMVWSs",
    authDomain: "chatapp-aaf72.firebaseapp.com",
    projectId: "chatapp-aaf72",
    storageBucket: "chatapp-aaf72.appspot.com",
    messagingSenderId: "166047090789",
    appId: "1:166047090789:web:d5258e67a7bbb85db69e8c",
    measurementId: "G-XHD1P2LQR9"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export {auth,provider} ;
export default db;
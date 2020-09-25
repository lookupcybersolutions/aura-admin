import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyCmEzsTpfTvWI5mH3Ys3ziYl0U_GCqzKwo",
  authDomain: "lookup-cyber-solutions-b378d.firebaseapp.com",
  databaseURL: "https://lookup-cyber-solutions-b378d.firebaseio.com",
  projectId: "lookup-cyber-solutions-b378d",
  storageBucket: "lookup-cyber-solutions-b378d.appspot.com",
  messagingSenderId: "931993750569",
  appId: "1:931993750569:web:b7512a5475172262876038",
  measurementId: "G-Q1R52VMY4N"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore:firebase.firestore(),
  auth:firebase.auth(),
  authw:firebase.auth,
  storage:firebase.storage(),
  functions: firebase.functions()
};
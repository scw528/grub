import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCGrRv6VsVeceBMIn4bqG7VoZz4i61gqkE",
  authDomain: "grubright-11f85.firebaseapp.com",
  databaseURL: "https://grubright-11f85.firebaseio.com",
  projectId: "grubright-11f85",
  storageBucket: "grubright-11f85.appspot.com",
  messagingSenderId: "594591547644",
  appId: "1:594591547644:web:0a0665eb758ffe52"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
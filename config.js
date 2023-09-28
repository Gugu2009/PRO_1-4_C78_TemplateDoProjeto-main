import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB1Vja2Mcrf-QPQnGccPNQF1Is63A26Y_Q",
  authDomain: "c-78-projeto.firebaseapp.com",
  projectId: "c-78-projeto",
  storageBucket: "c-78-projeto.appspot.com",
  messagingSenderId: "940808198063",
  appId: "1:940808198063:web:be96bbf048727d7444415a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

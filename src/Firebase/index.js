import firebase from "firebase/app";
import '@firebase/firestore';

const fireBaseConfig = {
    apiKey: "AIzaSyD_fuS5NV6Dh2Kn0moOjcH1Tv5niDFigqA",
    authDomain: "ergonomix-9f0f9.firebaseapp.com",
    projectId: "ergonomix-9f0f9",
    storageBucket: "ergonomix-9f0f9.appspot.com",
    messagingSenderId: "702438765160",
    appId: "1:702438765160:web:45f66f9914c73e3932c1dd"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(fireBaseConfig) : firebase.app();

  export const prodsCollection = firebase.firestore(app).collection('products');


import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

function StartFirebase(){
  const firebaseConfig = {
    apiKey: "AIzaSyDofR4L2AVi3MFsPfvSE_SXD76mg6t_5j0",
    authDomain: "halloweentf.firebaseapp.com",
    databaseURL: "https://halloweentf-default-rtdb.firebaseio.com",
    projectId: "halloweentf",
    storageBucket: "halloweentf.appspot.com",
    messagingSenderId: "712389571838",
    appId: "1:712389571838:web:628e81cd3092bb53a0a1af",
    measurementId: "G-SFF8P4CLCB"
  };

  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export default StartFirebase;
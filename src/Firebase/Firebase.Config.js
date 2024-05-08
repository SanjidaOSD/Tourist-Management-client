import { getAuth } from "firebase/auth";


import { initializeApp } from "firebase/app";

const firebaseConfig = {
 
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId

  // apiKey: "AIzaSyCBAcL4HXI2pUapiflVFGZGzkJMjDtGXT0",
  // authDomain: "m56-tourism-mabagement-website.firebaseapp.com",
  // projectId: "m56-tourism-mabagement-website",
  // storageBucket: "m56-tourism-mabagement-website.appspot.com",
  // messagingSenderId: "565282699266",
  // appId: "1:565282699266:web:48b88a779c1e5a95744f1b"




  

};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

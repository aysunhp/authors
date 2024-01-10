import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCGU7BU9ZrvPKs7h53yYJa2g92qACfz0ho",
  authDomain: "authors-38da2.firebaseapp.com",
  databaseURL: "https://authors-38da2-default-rtdb.firebaseio.com",
  projectId: "authors-38da2",
  storageBucket: "authors-38da2.appspot.com",
  messagingSenderId: "56189857927",
  appId: "1:56189857927:web:82dd112476d6145d938822",
};

const app = initializeApp(firebaseConfig);

export default app;

import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyANVVHg7tBPQbY-7xBzqopDsMX5S3WxEMg",
  authDomain: "tenedores-6fa9b.firebaseapp.com",
  databaseURL: "https://tenedores-6fa9b.firebaseio.com",
  projectId: "tenedores-6fa9b",
  storageBucket: "tenedores-6fa9b.appspot.com",
  messagingSenderId: "677539756174",
  appId: "1:677539756174:web:99a5b71179a0892d"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

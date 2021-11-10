// Your web app's Firebase configuration
console.log(process.env);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCMdQvhW5QQcbYYmVfDjUez1kU1e_tWpj8",
//   authDomain: "travele-8e39e.firebaseapp.com",
//   projectId: "travele-8e39e",
//   storageBucket: "travele-8e39e.appspot.com",
//   messagingSenderId: "716531898600",
//   appId: "1:716531898600:web:59caa926e50d1591c0515d"
// };

export default firebaseConfig;
import firebase from 'firebase/app'
import 'firebase/auth'
import "firebase/firestore";
import "firebase/storage";
const app= firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSANGER_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
})

const storage = firebase.storage();
var db= firebase.firestore();

export const auth=app.auth();
export default app;
export {storage}
export{db}
export const increaseBy = firebase.firestore.FieldValue.increment(1);



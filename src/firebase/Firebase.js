import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyC_1MWmu7fR8zdnuCz92aj_fsihDHXXxmA",
  authDomain: "event-registration-porta-f23c7.firebaseapp.com",
  projectId: "event-registration-porta-f23c7",
  storageBucket: "event-registration-porta-f23c7.appspot.com",
  messagingSenderId: "204222241854",
  appId: "1:204222241854:web:68ae838730aaf7e2e2c56f"
};

firebase.initializeApp(firebaseConfig)
export const dataRef = firebase.database()
export default firebase
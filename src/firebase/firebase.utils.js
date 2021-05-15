import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDm1o5lKnpZeWCb1VAax9IZOqDVOJFgm4Q',
  authDomain: 'crown-db-ff53e.firebaseapp.com',
  projectId: 'crown-db-ff53e',
  storageBucket: 'crown-db-ff53e.appspot.com',
  messagingSenderId: '208658233864',
  appId: '1:208658233864:web:55dd7d0ddb8df7391defbd',
  measurementId: 'G-8MN0CHL84V'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

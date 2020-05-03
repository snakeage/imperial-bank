import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCTZMIms0eFcTnoNMLmMcczPnexLI-jnPk',
  authDomain: 'imperial-bank-86d0d.firebaseapp.com',
  databaseURL: 'https://imperial-bank-86d0d.firebaseio.com',
  projectId: 'imperial-bank-86d0d',
  storageBucket: 'imperial-bank-86d0d.appspot.com',
  messagingSenderId: '820192542715',
  appId: '1:820192542715:web:e58663be7d83e0a687155e',
  measurementId: 'G-5JGH81H9B5',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

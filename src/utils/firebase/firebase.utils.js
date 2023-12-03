import {initializeApp} from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkbDuwIWoFRbF4iE6ygmFti8npWxseYFc",
  authDomain: "my-store-atf82.firebaseapp.com",
  projectId: "my-store-atf82",
  storageBucket: "my-store-atf82.appspot.com",
  messagingSenderId: "439602018358",
  appId: "1:439602018358:web:7b564cc9e982938b294097",
  measurementId: "G-YXCB21XJNC"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt:'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc (userDocRef);
  
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt
      });
    }catch (error){
      console.log('error creating the user ', error.message);
    }
  }
  return userDocRef;
}
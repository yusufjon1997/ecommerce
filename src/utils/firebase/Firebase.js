// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth ,
    signInWithPopup ,  
    GoogleAuthProvider,
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword,
    signOut, 
    onAuthStateChanged
} from 'firebase/auth';

import {
    getFirestore, 
    doc , 
    getDoc , 
    setDoc
} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDhp4gIImYcewPRxmYuH8323-eHLGTNZwc",
  authDomain: "ecommerce-1c66b.firebaseapp.com",
  projectId: "ecommerce-1c66b",
  storageBucket: "ecommerce-1c66b.appspot.com",
  messagingSenderId: "578697208499",
  appId: "1:578697208499:web:b1d53bed1372f7f53946c6",
  measurementId: "G-FYGW5NN515"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth , provider);

export const db = getFirestore();

export const createUserDocument = async (userAuth , additionalInformation = {}) => {
    const userDocRef = doc( db , 'users' , userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);
    
    // check if userdata exists if does not exist create / set document to firestore collection
    if(!userSnapShot.exists()) {
        const { displayName , email , photoURL } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef , {
                displayName , 
                email , 
                photoURL, 
                createdAt, 
                ...additionalInformation
            });
        } catch (err) {
            console.log(err.message)
        }
    }

    return userDocRef;

}


export const createAuthWithEmailAndPassword = async (email , password) =>{
    if(!email || !password) return;

    return createUserWithEmailAndPassword(auth , email , password);
}

export const signInAuthWithEmailAndPassword = async (email , password) =>{
    if(!email || !password) return;

    return signInWithEmailAndPassword(auth , email , password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

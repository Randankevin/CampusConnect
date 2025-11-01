// placeholder minimal auth functions
import { auth, db } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js';
import { doc, setDoc } from 'https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js';
export async function registerAndCreateProfile(email,password,profile){const u=await createUserWithEmailAndPassword(auth,email,password);await setDoc(doc(db,'profiles',u.user.uid),profile);return u.user;}
export async function signIn(email,password){return signInWithEmailAndPassword(auth,email,password);}
export async function customSignOut(){return signOut(auth);}
export async function signOutAndGotoLogin(){await customSignOut();location.href='index.html';}
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDBvpClL0bybkXJgnAAagyJx2xeci9drdc",
  authDomain: "booldook-store.firebaseapp.com",
  projectId: "booldook-store",
  storageBucket: "booldook-store.firebasestorage.app",
  messagingSenderId: "491904710503",
  appId: "1:491904710503:web:a8a22a1676fc38030b61c2",
  measurementId: "G-6PTPXBLYQR",
}

const analytics = getAnalytics(app)

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export { signInWithPopup, signOut }

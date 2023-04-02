import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyDKaj75mFKb4aEyU_K53T8_j9gef_lqttU',
  authDomain: 'tiktok-clone-jornadadev.firebaseapp.com',
  projectId: 'tiktok-clone-jornadadev',
  storageBucket: 'tiktok-clone-jornadadev.appspot.com',
  messagingSenderId: '915869594154',
  appId: '1:915869594154:web:6bf6179077eac092ea4953'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db

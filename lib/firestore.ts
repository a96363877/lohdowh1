import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDNF8IclQF8rBFiq8yPA-4Bczxzx2IJSoY",
  authDomain: "atar1-f0830.firebaseapp.com",
  databaseURL: "https://atar1-f0830-default-rtdb.firebaseio.com",
  projectId: "atar1-f0830",
  storageBucket: "atar1-f0830.firebasestorage.app",
  messagingSenderId: "973639712303",
  appId: "1:973639712303:web:2f32be1d28949da178d0da",
  measurementId: "G-M9JLXES2TP"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}

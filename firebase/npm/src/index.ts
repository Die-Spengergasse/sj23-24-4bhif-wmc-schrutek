import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Product } from './product-model';

const firebaseApp = initializeApp({
    projectId: 'firedemoschrutek',
    appId: '1:60054062437:web:3df9eab4374d35fe3b8d8c',
    storageBucket: 'firedemoschrutek.appspot.com',
    apiKey: 'AIzaSyBkSiUVKdKKcGR23E-4AmITcMpL8OrOFMY',
    authDomain: 'firedemoschrutek.firebaseapp.com',
    messagingSenderId: '60054062437',
    measurementId: 'G-9G9QE7NK00',
})

const db = getFirestore(firebaseApp);
const querySnapshot = await getDocs(collection(db, "products"));
querySnapshot.forEach((doc) => {
    const p: Product = doc.data() as Product;
    console.log(`ID: ${doc.id}`);
    console.log(`NAME: ${p.name}  -  PRICE: ${p.price}€`);
});
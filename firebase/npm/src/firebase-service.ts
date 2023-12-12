import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore';
import { Product } from './product-model.js';
import { BehaviorSubject, Observable, from } from 'rxjs';

export class FireBaseService {

    private products: Product[] = [];
    private db: Firestore; 

    public productsObservable: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

    constructor() {
        const firebaseApp = initializeApp({
            projectId: 'firedemoschrutek',
            appId: '1:60054062437:web:3df9eab4374d35fe3b8d8c',
            storageBucket: 'firedemoschrutek.appspot.com',
            apiKey: 'AIzaSyBkSiUVKdKKcGR23E-4AmITcMpL8OrOFMY',
            authDomain: 'firedemoschrutek.firebaseapp.com',
            messagingSenderId: '60054062437',
            measurementId: 'G-9G9QE7NK00',
        });
        this.db = getFirestore(firebaseApp);
    }
    
    public loadProducts(): void {
        const querySnapshot = getDocs(collection(this.db, "products"));

        querySnapshot.then((snapshot) => { 
            snapshot.forEach((data) => { 
                let p: Product = data.data() as Product;
                this.products.push(p);
            })
            this.productsObservable.next(this.products);
        });
    }

    public getProducts(): Observable<Product[]> {
        return from(this.productsObservable);
    }    
}
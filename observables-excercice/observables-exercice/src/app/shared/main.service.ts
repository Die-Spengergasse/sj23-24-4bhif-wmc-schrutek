import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private products: number = 0;
  private itemsCountObservable: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  addItem(): void {
    if (this.products < 10) {
      this.products++;
      this.itemsCountObservable.next(this.products);
    } else {
      this.itemsCountObservable.error('Enough! Game over!');
    }
  }
  removeItem(): void {
    if (this.products > 0) {
      this.products--;
      this.itemsCountObservable.next(this.products);
    }
  }

  getItemsCountObservable(): Observable<number> {
    return this.itemsCountObservable.asObservable();
  }
}

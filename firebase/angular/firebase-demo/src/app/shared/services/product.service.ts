import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../model/product';
import { Repository } from '../intefaces/repository';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements Repository {

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(map((item: Product[]) => {
        let products: Product[] = [];
        item.forEach((item) => { 
          products.push((
            { id: 0, name: item.name, price: item.id * 100 } as Product)); 
        } )
        return products;
       }
      )
    );
  }
}

import { Component } from '@angular/core';
import { FirebaseService } from '../shared/services/firebase.service';
import { Product } from '../shared/model/product';
import { NgFor } from '@angular/common';
import { ProductService } from '../shared/services/product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, HttpClientModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  public products: Product[] = [];
  
  constructor(private firebaseService: FirebaseService,
              private productService: ProductService) {
    this.getProducts();
  }

  public getProducts(): void {
    this.firebaseService
      .getProducts()
      .subscribe((data) => { 
        //console.log(data);
        this.products = data as Product[];
      }
    );
  }

  public getProducts2(): void {
    this.productService
      .getProducts()
      .subscribe((data) => { 
        console.log(data);
        this.products = data as Product[];
      }
    );
  }
}

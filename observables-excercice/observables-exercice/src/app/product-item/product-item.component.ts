import { Component } from '@angular/core';
import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  constructor(private mainService: MainService) {
  }

  plusClick(): void {
    this.mainService.addItem();
  }

  minusClick(): void {
    this.mainService.removeItem();
  }
}

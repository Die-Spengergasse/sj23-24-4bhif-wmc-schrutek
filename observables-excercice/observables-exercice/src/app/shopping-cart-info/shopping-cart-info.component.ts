import { Component } from '@angular/core';
import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-shopping-cart-info',
  templateUrl: './shopping-cart-info.component.html',
  styleUrls: ['./shopping-cart-info.component.css']
})
export class ShoppingCartInfoComponent {

  public itemsCount: number = 0;
  public errorMessage: string = "";

  constructor(private mainService: MainService) {
  }

  ngOnInit(): void {
    this.mainService.getItemsCountObservable().subscribe({ 
        next: (data) => {  
            console.log('items-count: ' + data)
            this.itemsCount = data;
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = err;
        }
    });
  }
}

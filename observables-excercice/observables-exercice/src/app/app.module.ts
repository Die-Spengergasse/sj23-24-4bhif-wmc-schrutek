import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartInfoComponent } from './shopping-cart-info/shopping-cart-info.component';
import { ProductItemComponent } from './product-item/product-item.component';

import { MainService } from './shared/main.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartInfoComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

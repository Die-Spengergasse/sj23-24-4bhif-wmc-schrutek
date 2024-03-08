import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './ui/users/users.component';
import { AlbumService } from './data/shared/album.service';
import { HttpClientModule } from '@angular/common/http';
import { AlbumListComponent } from './ui/album-list/album-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AlbumListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AlbumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

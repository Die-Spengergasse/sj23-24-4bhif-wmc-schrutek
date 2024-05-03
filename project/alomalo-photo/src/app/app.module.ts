import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './ui/users/users.component';
import { AlbumService } from './data/shared/album.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AlbumListComponent } from './ui/album-list/album-list.component';
import { LoggingInterceptor } from './data/shared/interceptors/logging.interceptor';
import { HeadersInterceptor } from './data/shared/interceptors/headers.interceptor';
import { AuthenticationInterceptor } from './data/shared/interceptors/authentication.interceptor';
import { ForbiddenNamePipe } from './data/shared/pipes/forbidden-name.pipe';
import { ShortenPipe } from './data/shared/pipes/shorten.pipe';

export const interceptorProviders = 
[
  { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true},
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AlbumListComponent,
    ForbiddenNamePipe,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AlbumService,
    interceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

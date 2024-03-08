import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './ui/shared/button/button.component';
import { MessageListComponent } from './ui/chatroom/message-list/message-list.component';
import { MessageComponent } from './ui/chatroom/message/message.component';
import { MessageFormComponent } from './ui/chatroom/message-form/message-form.component';
import { LoginComponent } from './ui/account/login/login.component';
import { HomeComponent } from './ui/chatroom/home/home.component';
import { NotFoundComponent } from './ui/errors/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    MessageListComponent,
    MessageComponent,
    MessageFormComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

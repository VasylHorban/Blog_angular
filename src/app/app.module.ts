import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/login/register/register.component';
import { BlogComponent } from './components/blog/blog.component';
import { ItemComponent } from './components/blog/item/item.component';
import { AddComponent } from './components/blog/add/add.component';
import { DeleteAllComponent } from './components/blog/delete-all/delete-all.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    BlogComponent,
    ItemComponent,
    AddComponent,
    DeleteAllComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

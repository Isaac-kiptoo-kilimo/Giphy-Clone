import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GifsComponent } from './components/gifs/gifs.component';
import { GifDetailsComponent } from './components/gif-details/gif-details.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { FormComponent } from './forms/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    GifsComponent,
    GifDetailsComponent,
    NavbarComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

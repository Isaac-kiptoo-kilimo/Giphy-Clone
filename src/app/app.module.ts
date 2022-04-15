import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GifsComponent } from './components/gifs/gifs.component';
import { GifDetailsComponent } from './components/gif-details/gif-details.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { FormComponent } from './forms/form/form.component';
import { HttpClientModule } from'@angular/common/http';
import { ArtistGifsComponent } from './components/artist-gifs/artist-gifs.component';
import { ClipsComponent } from './components/clips/clips.component';

import { SearchGifsComponent } from './components/search-gifs/search-gifs.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GifsComponent,
    GifDetailsComponent,
    NavbarComponent,
    FormComponent,
    ArtistGifsComponent,
    ClipsComponent,
    SearchGifsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

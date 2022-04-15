import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { GifsComponent } from './components/gifs/gifs.component';
import { SearchGifsComponent } from './components/search-gifs/search-gifs.component';

const routes: Routes = [
  {
    path:'home',
    component:GifsComponent
  },
  {
    path:'search',
    component:SearchGifsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

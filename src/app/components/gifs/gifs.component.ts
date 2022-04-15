import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.scss']
})
export class GifsComponent implements OnInit {
  gifs: any[]=[];
  loading:boolean=true;
  searchBar:string=""

  constructor(private http:HttpClient) { }

  // ngOnInit(): void {
  //   this.getGifs(),
  //     this.searchGifs()
  //   // this.gifs = this.getGifs(3)
  // }
  
  

  getGifs():any{
    this.http
    .get<any>(`https://api.giphy.com/v1/gifs/trending?api_key=eeUIYSYCbPMNZNGmAgUKj0YdqzjsGEAT&limit=7&rating=g`)
    .subscribe((data) => {
      data
      // data.data;
      // console.log(data.data);
      this.gifs = data.data;
      this.loading=false;
    },
    // (err) => {
    //   console.log('error');
    // }
  )
  }

  
  searchGifs(form:NgForm){
    // this.searchBar;
    let searchBar=form.value
    this.http
    .get<any>(`https://api.giphy.com/v1/gifs/search?api_key=eeUIYSYCbPMNZNGmAgUKj0YdqzjsGEAT&q=&limit=25&offset=0&rating=g&lang=en`)
    .subscribe((data) => {
      data
      // data.data;
      console.log(data.data);
      this.gifs = data.data;
      // this.loading=false;
    },)
     // (err) => {
    //   console.log('error');
    // }

  }

  ngOnInit(): void {
    // this.searchGifs()
    this.getGifs()
  }

  

}

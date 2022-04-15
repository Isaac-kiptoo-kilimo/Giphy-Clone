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

  ngOnInit(): void {
    this.getGifs(7)
    
    // this.gifs = this.getGifs(3)
  }
  searchGifs(form:NgForm){
    // this.searchBar;
    let searchBar=form.value
    this.http
    .get<any>(`https://api.giphy.com/v1/gifs/search?api_key=eeUIYSYCbPMNZNGmAgUKj0YdqzjsGEAT&q=&limit=25&offset=0&rating=g&lang=en`)
    .subscribe((data) => {
   
      this.gifs = data.data;
      this.loading=false;
    },)
     // (err) => {
    //   console.log('error');
    // }

  }
  

  getGifs(count:number):any{
    this.http
    .get<any>(`https://api.giphy.com/v1/gifs/trending?api_key=eeUIYSYCbPMNZNGmAgUKj0YdqzjsGEAT&limit=${count}&rating=g`)
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
  buttonName = "More Gifs"
  getMoreGifs(count:number){
    if(this.buttonName === "More Gifs"){
      this.http
    .get<any>(`https://api.giphy.com/v1/gifs/trending?api_key=eeUIYSYCbPMNZNGmAgUKj0YdqzjsGEAT&limit=10&rating=g`)
    .subscribe((data) => {
      data
      // data.data;
      // console.log(data.data);
      this.gifs = data.data;
      this.loading=false;
      this.buttonName ="Less Gifs"
    })
    
  }
  else if(this.buttonName === "Less Gifs"){
    this.http
    .get<any>(`https://api.giphy.com/v1/gifs/trending?api_key=eeUIYSYCbPMNZNGmAgUKj0YdqzjsGEAT&limit=100&rating=g`)
    .subscribe((data) => {
      data
      // data.data;
      // console.log(data.data);
      this.gifs = data.data;
      this.loading=false;
      this.buttonName ="More Gifs"
    })

  }
  }
}
  // getMoreGifs(count:number):any{
  //   this.http
  //   .get<any>(`https://api.giphy.com/v1/gifs/trending?api_key=eeUIYSYCbPMNZNGmAgUKj0YdqzjsGEAT&limit=100&rating=g`)
  //   .subscribe((data) => {
  //     data
  //     // data.data;
  //     // console.log(data.data);
  //     this.gifs = data.data;
  //     this.loading=false;
  //   },
  //   // (err) => {
  //   //   console.log('error');
  //   // }
  // )
  // }
 

  

  






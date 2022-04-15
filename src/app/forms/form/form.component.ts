import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  searchBar: any;
  gifs: any[]=[];
 
  constructor(private http:HttpClient) { }

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
    this.searchGifs
    // this.getGifs()
  }

}

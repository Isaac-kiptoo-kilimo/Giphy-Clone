import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.scss']
})
export class GifsComponent implements OnInit {
  gifs: any[]=[];

  constructor(private http:HttpClient) { }

  getGifs():any{
    this.http
    .get<any>(`https://api.giphy.com/v1/gifs/trending?api_key=eeUIYSYCbPMNZNGmAgUKj0YdqzjsGEAT&limit=7&rating=g`)
    .subscribe((data) => {
      data
      // data.data;
      // console.log(data.data);
      this.gifs = data.data;
    },
    // (err) => {
    //   console.log('error');
    // }
  )
  }
  

  ngOnInit(): void {
    this.getGifs()
    // this.gifs = this.getGifs(3)
  }
;
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-artist-gifs',
  templateUrl: './artist-gifs.component.html',
  styleUrls: ['./artist-gifs.component.scss']
})
export class ArtistGifsComponent implements OnInit {
  gifs: any[]=[];
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    this.getGifs()
  }

  getGifs():any{
    this.http
    .get<any>(`https://api.giphy.com/v1/gifs/trending?api_key=eeUIYSYCbPMNZNGmAgUKj0YdqzjsGEAT&limit=3&rating=g`)
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


}

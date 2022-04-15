import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-search-gifs',
  templateUrl: './search-gifs.component.html',
  styleUrls: ['./search-gifs.component.scss']
})
export class SearchGifsComponent implements OnInit {
  gifs = new BehaviorSubject<any>([])
  constructor(private http:HttpClient) { }
  // searchName:string
  search(gifs:any){
    // if(searchName != ''){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=eeUIYSYCbPMNZNGmAgUKj0YdqzjsGEAT&q=&limit=25&offset=0&rating=g&lang=en`).subscribe((response:any)=>{
      this.gifs.next(response.data)
    })
  // }
}

  ngOnInit(): void {
  }

}

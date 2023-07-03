import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  search:string=''
  array: any = [];
  constructor(private youtubeService: YoutubeService) { }

  ngOnInit() {
    this.getApiData()
  }

  getApiData() {
    this.youtubeService.getApiData().subscribe(res => {
      console.log(res);
      this.array = res

      this.array = this.array.filter((res:any)=>{
        if(res.category == 'movies'){
          return this.array
        }
      })
    })

    this.youtubeService.search.subscribe(res=>{
      this.search = res;
    })
  }

}

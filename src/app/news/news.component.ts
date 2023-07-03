import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  search='';
  array: any = []
  constructor(private yservice: YoutubeService) { }

  ngOnInit() {
    this.yservice.getApiData().subscribe(res => {
      this.array = res;

      this.array = this.array.filter((res:any)=>{
        if(res.category == 'news'){
          return this.array;
        }
      })
    })


    this.yservice.search.subscribe(res=>{
      this.search = res;
    })
  }

}

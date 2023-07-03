import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  // array: any = []
  array1: any = []
  search=''
  constructor(private yservice: YoutubeService) { }

  ngOnInit() {
    this.yservice.getApiData().subscribe((res: any) => {
      this.array1 = res

      this.array1 = this.array1.filter((a: any) => {
        if (a.category == 'music') {
          return this.array1;
        }
        // console.log('aaaaaaaaaaaaaa', this.array1);

      })
    })

    this.yservice.search.subscribe(res=>{
      this.search = res;
    })
  }


}

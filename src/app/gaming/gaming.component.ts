import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.css']
})
export class GamingComponent implements OnInit {
  search='';
  array:any=[]
  constructor(private yservice:YoutubeService) { }

  ngOnInit() {
    this.yservice.getApiData().subscribe(res=>{
      this.array = res;

    this.array = this.array.filter((res:any)=>{
      if(res.category == 'gaming'){
        return this.array
      }
    })
  })

  this.yservice.search.subscribe(res=>{
    this.search = res
  })


  }

}

import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search:string='';
  array: any = [];
  filterCategory:any;
  constructor(private youtubeService: YoutubeService) { }

 
  ngOnInit() {
    this.getApiData()

    this.youtubeService.search.subscribe(res =>{
      this.search = res;
    })
  }



  getApiData() {
    this.youtubeService.getApiData().subscribe(res => {
      console.log(res);
      this.array = res
      this.filterCategory = res;
    })
  }

  filter(category){
    this.filterCategory = this.array.filter((a:any)=>{
      if(a.category == category || category == ''){
        return a;
      }
    })
  }
}

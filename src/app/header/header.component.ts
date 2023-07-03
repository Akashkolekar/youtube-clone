import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public searchTerm: string = '';
  show: boolean = false;
  showProfile:boolean = false;
  constructor(private youtubeS: YoutubeService) { }

  ngOnInit() {
  }

  changeBar() {
    this.show = !this.show
  }
  changeBarProfile() {
    this.showProfile = !this.showProfile
  }
  openProfile(){
    this.showProfile = false
  }


  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    // console.log(this.searchTerm);
    this.youtubeS.search.next(this.searchTerm);
    
  }

}

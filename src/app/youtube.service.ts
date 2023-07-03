import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  public search = new BehaviorSubject<string>("");
  constructor(private http: HttpClient) { }

  getApiData(){
    return this.http.get("http://localhost:3000/youtube");
  }
}

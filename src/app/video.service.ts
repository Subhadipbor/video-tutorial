import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  //adding remote url
  public _url:string="https://futuristic-reinvented-flood.glitch.me/api";

  constructor(private http:HttpClient,private userService:UserService) { }
  //create a function whcih will read all videos from api
  getVideos(){
    let validToken=this.userService.getToken();
    return this.http.get(`${this._url}/video?token=${validToken}`);
  }
  //adding a function for saving a new Video t api
  addVideos(title:string,desc:string,url:string){
    
    return this.http.post(`${this._url}/video`,{'title':title,'description':desc,'url':url});
    }
      //adding a function for deleteing Video from api
  deleteVideo(id:any){
    console.log(id);
    return this.http.delete(`${this._url}/video/`+id);
    //return 0;
  }

  // adding a function which will update Video from api
  updateVideo(id:any,updatedTitle:string,updatedDesc:string,updatedURL:string){
    return this.http.put(`${this._url}/video/${id}`,{'title':updatedTitle,'description':updatedDesc,'url':updatedURL});

  }
}



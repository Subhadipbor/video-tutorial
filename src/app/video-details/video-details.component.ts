import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { UserService } from '../user.service';
import {VideoService} from '../video.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
  public userName:string='';

public videos:any=[];
public message:string='';
public btn:string='';
public selectedVideo:any={'_id':null,'title':null,'description':null,'url':null};


  constructor(private videoService:VideoService,private toastrService:ToastrService,private userService:UserService,private router:Router) { }
 populateVideos(){
   if(this.userService.getToken() == null || this.userService.getToken() ==""){
this.toastrService.error("Please login to continue");
this.router.navigate(['/users']);

   }else{
   this.videoService.getVideos()
   .subscribe(data=>{
     console.log(data);
     this.videos=data;
   });
 this.userName=this.userService.getUserName().toString();
  }
 }
 logout(){
   this.userService.logoutUser();
   this.toastrService.success('Done','You have Successfully Logged out !');

   this.router.navigate(['/users']);

 }

  ngOnInit(): void {
    this.populateVideos();
  }
  // for updating calling service
  saveVideo(video,b1){
    console.log(video.value);
    if(b1.innerHTML =='Update'){
      console.log('Updating....');
      this.videoService.updateVideo(this.selectedVideo._id,video.value.title,video.value.description,video.value.url)
     .subscribe(data=>{
       this.message = data['message'].toString();
       //toast message for updating video
       this.toastrService.info('',this.message);
       this.populateVideos();
     });

    
    }else{

    let newTitle =video.value.title;
    let newDesc=video.value.description;
    let newUrl=video.value.url;

    //calling the service for add video
    this.videoService.addVideos(newTitle,newDesc,newUrl)
    .subscribe(data=>{
      console.log(data);
      this.message=data['message'].toString();
      this.toastrService.success('',this.message);
      this.populateVideos();
    });
  }
}
  onSelect(video,b1){
    this.selectedVideo=video;
    console.log(this.selectedVideo);
    if(this.selectedVideo !=null){
      b1.innerHTML ='Update';
      this.btn="Update";

    }
    else{
      b1.innerHTML ='Add';
      this.btn="Update";
    }
  }
  removeVideo(id){
    console.log(id);
    var r=confirm('Do You want to Delect This Record ?');
    if(r){
      //calling the service for delete video
      this.videoService.deleteVideo(id)
      .subscribe(data=>{
        this.message=data['message'].toString();
        //toast message for deleting video
       this.toastrService.info('',this.message);
        this.populateVideos();
        });
    }
  }
  }



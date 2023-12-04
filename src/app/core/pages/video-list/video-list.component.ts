import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from 'src/app/core/services/data.service';
//import { ApiEndpointConstants } from 'src/app/core/constants/ApiEndpointsConstant';
//import { VideolistModel } from 'src/app/core/models/videolist-model';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent implements OnInit {
  
  videolistModel: any; //Array<VideolistModel>;

  constructor(private dataService:DataService, public domSanitizer: DomSanitizer){}

  ngOnInit(): void {
    this.load();
  }

  //load
   async load(){
    let _videolistModel: any;
    _videolistModel = this.dataService.getVideos();
    this.videolistModel = _videolistModel;
  }

  getvideoLink(videoID:number): any {
    let _videoLink: any;
    _videoLink = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videolistModel[videoID - 1].VideoLink);
    return _videoLink;
  }

}
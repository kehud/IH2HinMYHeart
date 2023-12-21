import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from 'src/app/core/services/data.service';
//import { ApiEndpointConstants } from 'src/app/core/constants/ApiEndpointsConstant';
import { VideoListModel } from 'src/app/core/models/videolist-model';
import { CategoryConstant } from 'src/app/core/constants/CategoryConstant';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent implements OnInit {
  
  videolistRecords: Array<VideoListModel> = [];
  categoryId!: number;
  title!: string;
  
  constructor(private dataService:DataService, private activatedRoute:ActivatedRoute, public domSanitizer: DomSanitizer, private spinner: NgxSpinnerService){
    this.activatedRoute.params.subscribe(q=>{
      this.categoryId = q['id'];
      this.load(this.categoryId);
    })
  }
 
  ngOnInit(): void {
       
  }

  load(Id:any){
    /** spinner starts on init */
    this.spinner.show();

    //videos list
    let _videolistModel: any;
    _videolistModel = this.dataService.getVideos(Id);
    this.videolistRecords = _videolistModel;

    //title
    const indexOfS = Object.values(CategoryConstant).indexOf(parseInt(Id));
    this.title = Object.keys(CategoryConstant)[indexOfS];

    /** spinner ends after 1 second */
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

  getVideoLink(videoID:number): any {
    let _videoLink: any;
    _videoLink = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videolistRecords?.filter(x => x.VideoID == videoID).map(x => x.VideoLink).toString());    
    return _videoLink;
  }

}
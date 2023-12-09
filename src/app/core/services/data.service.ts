import { HttpStatusCode, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoListModel } from 'src/app/core/models/videolist-model';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  //headers
  private headers = {
    "Accept": "*/*",
    "Content-Type": "application/json"
  };




  videoList = [
    {VideoID: 1, Title: "Video 001", FullDescription: "ציפי נגב וליאת כרמלי שיחה על ויסות אישי והדדי", Duration: 15, VideoLink: "https://www.youtube.com/embed/uPqK6MAISTs?si=ll7ZI8nMrbjHOJ7z"},
    {VideoID: 2, Title: "Video 002", FullDescription: "ציפי נגב כלים לרגיעה", Duration: 12, VideoLink: "https://www.youtube.com/embed/7qciYQFtKFg?si=oJ6pTtsuYfL_cyGt"}
  ];

  constructor(private httpClient: HttpClient) { }

  public getVideos():Array<{VideoID: number, Title: string, FullDescription: string, Duration: number, VideoLink: string}>{
    return this.videoList;
  }


  //1 getVideos
  // public getVideos(): Observable<VideoListModel[]>{
  //   return this.httpClient.get<VideoListModel[]>(`${environment.api}/getVideos`,
  //   {
  //     headers: {
  //       ...this.headers
  //     }
  //   });
  // }


//2 getVideosbyid
  // public getBusinessByCategoryID(CategoryID: number): Observable<BusinessModel[]>{
  //   return this.httpClient.get<BusinessModel[]>(`${environment.api}/getBusinessByCategoryID/` + CategoryID,
  //   {
  //     headers: {
  //       ...this.headers
  //     }
  //   });
  // }




}
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
    {VideoID: 1, CategoryID: 1, Title: "Video 001", FullDescription: "ציפי נגב וליאת כרמלי שיחה על ויסות אישי והדדי", Duration: "15", VideoLink: "https://www.youtube.com/embed/uPqK6MAISTs?si=ll7ZI8nMrbjHOJ7z"},
    {VideoID: 2, CategoryID: 1, Title: "Video 002", FullDescription: "ציפי נגב כלים לרגיעה", Duration: "12", VideoLink: "https://www.youtube.com/embed/7qciYQFtKFg?si=oJ6pTtsuYfL_cyGt"},
    {VideoID: 3, CategoryID: 5, Title: "Video 003", FullDescription: "ציפי נגב עם עיסוי צוואר", Duration: "2:02", VideoLink: "https://www.youtube.com/embed/CDYq56KVDoM?si=aYHUAKbS2JRadRlO"},
    {VideoID: 4, CategoryID: 5, Title: "Video 004", FullDescription: "ציפי נגב עם משאבים וכוחות פנימיים", Duration: "2:10", VideoLink: "https://www.youtube.com/embed/UYWZuuoNTQE?si=-Ha9BYvDgDMDFHSC"},
    {VideoID: 5, CategoryID: 2, Title: "Video 005", FullDescription: "ציפי נגב עם מגע הנכחה", Duration: "2:24", VideoLink: "https://www.youtube.com/embed/NjLP6a7ICU8?si=QHek2Vx5gEHzNCQu"},
    {VideoID: 6, CategoryID: 5, Title: "Video 006", FullDescription: "ציפי נגב עם תרגול המתנה", Duration: "1:41", VideoLink: "https://www.youtube.com/embed/DVA5au_6jHU?si=wcaDAp-8SDQKoYYH"},
    {VideoID: 7, CategoryID: 1, Title: "Video 007", FullDescription: "כח של בוקר עם מאיה", Duration: "11:38", VideoLink: "https://www.youtube.com/embed/ft6ykfzly-A?si=aIY8wYEzVmjbCJ4D"},
    {VideoID: 8, CategoryID: 1, Title: "Video 008", FullDescription: "כיצד להשתמש עם ערכת POM", Duration: "1:14", VideoLink: "https://www.youtube.com/embed/3uB30rSXD1A?si=OZUR1OlNtxS87KYw"}
  ];

  constructor(private httpClient: HttpClient) { }

  public getVideos(Id:number):Array<{VideoID: number, CategoryID: number, Title: string, FullDescription: string, Duration: string, VideoLink: string}>{
    return this.videoList.filter(x => x.CategoryID == Id);
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
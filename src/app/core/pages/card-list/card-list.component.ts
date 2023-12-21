import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import KeenSlider, { KeenSliderInstance, TrackDetails } from "keen-slider"
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ["../../../../../node_modules/keen-slider/keen-slider.min.css",'./card-list.component.css']
})

export class CardListComponent implements OnInit{

  constructor(private spinner: NgxSpinnerService){
  }

  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>
  
  images: String[] = [
    "./../../../../assets/cards/1.png",
    "./../../../../assets/cards/2.png",
    "./../../../../assets/cards/3.png",
    "./../../../../assets/cards/4.png"
  ]

  details: TrackDetails | undefined
  slider!:  KeenSliderInstance

  ngOnInit(): void {
    /** spinner starts on init */
   this.spinner.show();
   setTimeout(() => {
     /** spinner ends after 5 seconds */
     this.spinner.hide();
   }, 2000);
  }

  scaleStyle(idx: any) {
    if (!this.details) return {}
    const slide = this.details.slides[idx]
    const scale_size = 0.7
    const scale = 1 - (scale_size - scale_size * slide.portion)
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        loop: true,
        detailsChanged: (s) => {
          this.details = s.track.details
        },
        initial: 2,
      })
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }

}

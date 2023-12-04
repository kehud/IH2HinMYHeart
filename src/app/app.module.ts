import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './core/pages/home/home.component';
import { CardListComponent } from './core/pages/card-list/card-list.component';
import { VideoListComponent } from './core/pages/video-list/video-list.component';

import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardListComponent,
    VideoListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

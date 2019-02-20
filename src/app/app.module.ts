import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from '../app/services/DAL';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { VideoListComponent } from './video-list/video-list.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/BL';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { VideoFilterComponent } from './video-filter/video-filter.component'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ChannelComponent } from './channel/channel.component';
import { APP_BASE_HREF } from '@angular/common';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SlimLoadingBarModule.forRoot(),
    InfiniteScrollModule
  ],
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailsComponent,
    VideoFilterComponent,
    ChannelComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
  },
    ConfigService, DataService , {provide: APP_BASE_HREF, useValue : '/' }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  exports: [BrowserModule, SlimLoadingBarModule]
})
export class AppModule { }

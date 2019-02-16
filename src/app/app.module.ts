import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from '../app/services/DAL';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { VideoListComponent } from './video-list/video-list.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/BL';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { VideoDetailsComponent } from './video-details/video-details.component'



@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SlimLoadingBarModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
  },
    ConfigService, DataService],
  bootstrap: [AppComponent],
  exports: [BrowserModule, SlimLoadingBarModule]
})
export class AppModule { }

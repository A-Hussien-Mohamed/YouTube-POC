import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { DataService } from './services/BL';
import { ConfigService } from '../app/services/DAL';
import { VideoFilterComponent } from './video-filter/video-filter.component'
import { VideoDetailsComponent } from './video-details/video-details.component';
import { VideoListComponent } from './video-list/video-list.component';
import { ChannelComponent } from './channel/channel.component';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, resource } from 'selenium-webdriver/http';
import { inject } from '@angular/core';
import { searchPridicate, response } from './interfaces/interfaces';
import { privateDecrypt } from 'crypto';
import { Router } from '@angular/router';


describe('AppComponent', () => {
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        SlimLoadingBarModule,
        HttpClientModule,
        HttpClientTestingModule

      ],
      declarations: [
        AppComponent,
        VideoListComponent,
        VideoDetailsComponent,
        VideoFilterComponent,
        ChannelComponent

      ],
      providers: [DataService, ConfigService, { provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
    router = TestBed.get(Router);

  }));

  it('should navigate', () => {
    const fixture = TestBed.createComponent(AppComponent);
    let component = fixture.componentInstance;
    let navigateSpy = spyOn(router, 'navigateByUrl');
    component.search("funny");
    expect(navigateSpy).toHaveBeenCalledWith('/video');
  });
});

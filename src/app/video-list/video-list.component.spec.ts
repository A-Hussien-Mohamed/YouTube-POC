import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListComponent } from './video-list.component';
import { VideoFilterComponent } from '../video-filter/video-filter.component'
import { VideoDetailsComponent } from '../video-details/video-details.component';
import { ChannelComponent } from '../channel/channel.component';
import { DataService } from '../services/BL';
import { ConfigService } from '../services/DAL';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { searchPridicate, response } from '../interfaces/interfaces';
import { RouterTestingModule } from '@angular/router/testing';

describe('VideoListComponent', () => {
  let component: VideoListComponent;
  let fixture: ComponentFixture<VideoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [VideoListComponent, VideoFilterComponent, VideoDetailsComponent, ChannelComponent],
      providers: [DataService, ConfigService, { provide: APP_BASE_HREF, useValue: '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});

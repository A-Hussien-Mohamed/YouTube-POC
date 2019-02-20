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


  it(`should have as title 'Instabug-YouTube'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Instabug-YouTube');
  });


  it("should use the use data service to get videos", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const dataService = fixture.debugElement.injector.get(DataService);
    fixture.detectChanges();
    let videoList: response;
    let response = {
      "kind": "youtube#searchListResponse",
      "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/yzBm4B-ug_IMyT4sI2H8VTQNN8w\"",
      "nextPageToken": "CAoQAA",
      "regionCode": "EG",
      "pageInfo": {
        "totalResults": 1000000,
        "resultsPerPage": 10
      },
      "items": [
        {
          "kind": "youtube#searchResult",
          "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/0LG4Jg0EV14c5UiMLdaaet_v2CM\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "UOxkGD8qRB4"
          },
          "snippet": {
            "publishedAt": "2018-11-03T07:30:00.000Z",
            "channelId": "UC2t5bjwHdUX4vM2g8TRDq5g",
            "title": "K/DA - POP/STARS (ft Madison Beer, (G)I-DLE, Jaira Burns) | Official Music Video - League of Legends",
            "description": "K/DA Ahri, K/DA Evelynn, K/DA Kai'Sa, and K/DA Akali take the world stage with their debut single. Keep the show going on the Rift with these new Epic skins.",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/UOxkGD8qRB4/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/UOxkGD8qRB4/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/UOxkGD8qRB4/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "League of Legends",
            "liveBroadcastContent": "none"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/pqPk68pyu4UN0ALIfeVVFhIvYQo\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "m7Bc3pLyij0"
          },
          "snippet": {
            "publishedAt": "2018-09-24T13:58:16.000Z",
            "channelId": "UCEdvpU2pFRCVqU6yIPyTpMQ",
            "title": "Marshmello ft. Bastille - Happier (Official Music Video)",
            "description": "Marshmello ft. Bastille - Happier (Official Music Video) Download / Stream Happier ▷ http://marshmello.lnk.to/happier NEW Mello™   by Marshmello gear SHOP ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/m7Bc3pLyij0/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/m7Bc3pLyij0/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/m7Bc3pLyij0/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Marshmello",
            "liveBroadcastContent": "none"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/id3uz64VI_Frb6lxlzAYDG8yCuw\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "A2FsgKoGD04"
          },
          "snippet": {
            "publishedAt": "2017-05-25T21:58:58.000Z",
            "channelId": "UCRijo3ddMTht_IHyNSNXpNQ",
            "title": "Real Life Trick Shots | Dude Perfect",
            "description": "Trick shots should be an everyday thing! Thanks to Kingsford for sponsoring this video! ▻ Click HERE to subscribe to Dude Perfect! http://bit.ly/SubDudePerfect ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/A2FsgKoGD04/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/A2FsgKoGD04/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/A2FsgKoGD04/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Dude Perfect",
            "liveBroadcastContent": "none"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/bbnLoAccU1uWqDPe1ba8U_3sAr0\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "hA6hldpSTF8"
          },
          "snippet": {
            "publishedAt": "2018-12-07T13:01:21.000Z",
            "channelId": "UCvC4D8onUfXzvjTOM-dBfEA",
            "title": "Marvel Studios' Avengers - Official Trailer",
            "description": "Part of the journey is the end. ▻ Subscribe to Marvel: http://bit.ly/WeO3YJ Learn more: https://bit.ly/2QD3Z85 --- Follow Marvel on Twitter: ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/hA6hldpSTF8/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/hA6hldpSTF8/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/hA6hldpSTF8/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Marvel Entertainment",
            "liveBroadcastContent": "none"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/1szGxIC2JpHOZayLDDyWY1wRMRg\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "VRJmcxCrAOA"
          },
          "snippet": {
            "publishedAt": "2018-01-22T22:55:24.000Z",
            "channelId": "UCRijo3ddMTht_IHyNSNXpNQ",
            "title": "Real Life Trick Shots 2 | Dude Perfect",
            "description": "Trick shots should be an everyday thing! Thanks to Kay Jewelers for sponsoring this video! Win Valentine's Day by going to http://dudeperfect.com/KayJewelers ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/VRJmcxCrAOA/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/VRJmcxCrAOA/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/VRJmcxCrAOA/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Dude Perfect",
            "liveBroadcastContent": "none"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/r2nDE73sd5Iy3E1d0mr0HbGBQRs\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "VNM7Z7hir_I"
          },
          "snippet": {
            "publishedAt": "2013-12-12T00:49:00.000Z",
            "channelId": "UCi7GJNg51C3jgmYTUwqoUXA",
            "title": "Ice Cube, Kevin Hart, And Conan Share A Lyft Car",
            "description": "CONAN Highlight: The stars of \"Ride Along\" teach Conan how to roll around Hollywood. Get \"Ride Along\" on Blu-ray™ @ http://ridealong.com Team Coco is the ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/VNM7Z7hir_I/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/VNM7Z7hir_I/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/VNM7Z7hir_I/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Team Coco",
            "liveBroadcastContent": "none"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/dlFQhkKAnj0ViTzx407HUttSEH8\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "-OfOkiVFmhM"
          },
          "snippet": {
            "publishedAt": "2019-02-11T09:00:01.000Z",
            "channelId": "UCEf_Bc-KVd7onSeifS3py9g",
            "title": "TAEMIN 태민 'WANT' MV",
            "description": "TAEMIN's the 2nd mini album \"WANT\" is out! Listen on iTunes & Apple Music, Spotify, and Google Play Music http://smarturl.it/TAEMIN_WANT [Tracklist] 01 ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/-OfOkiVFmhM/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/-OfOkiVFmhM/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/-OfOkiVFmhM/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "SMTOWN",
            "liveBroadcastContent": "none"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/kgwvHkfyrLwgDQSoGh8jH_qbax0\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "1Za8BtLgKv8"
          },
          "snippet": {
            "publishedAt": "2016-01-06T04:49:00.000Z",
            "channelId": "UCi7GJNg51C3jgmYTUwqoUXA",
            "title": "Ice Cube, Kevin Hart And Conan Help A Student Driver  - CONAN on TBS",
            "description": "CONAN Highlight: A CONAN staffer is learning the rules of the road, with a little help from Kevin Hart, Ice Cube, & Conan. Look out, fellow drivers! More CONAN ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/1Za8BtLgKv8/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/1Za8BtLgKv8/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/1Za8BtLgKv8/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Team Coco",
            "liveBroadcastContent": "none"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/UPUVNtTqIm2QOuHvyl1CdDRENSs\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "kM9Wuzj4k24"
          },
          "snippet": {
            "publishedAt": "2016-11-04T04:10:56.000Z",
            "channelId": "UC8-Th83bH_thdKZDJCrn88g",
            "title": "Mad Lib Theater with Benedict Cumberbatch",
            "description": "Jimmy and Benedict Cumberbatch perform an intense scene they've written together using Mad Libs. Subscribe NOW to The Tonight Show Starring Jimmy ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/kM9Wuzj4k24/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/kM9Wuzj4k24/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/kM9Wuzj4k24/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "The Tonight Show Starring Jimmy Fallon",
            "liveBroadcastContent": "none"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/44tmDuvPZ09W5rhIvbnlvCG8ojk\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "e8CLsYzE5wk"
          },
          "snippet": {
            "publishedAt": "2019-01-24T02:00:00.000Z",
            "channelId": "UCnc6db-y3IU7CkT_yeVXdVg",
            "title": "J. Cole - MIDDLE CHILD (Official Audio)",
            "description": "J. Cole - Middle Child (Official Audio) Stream or Download \"Middle Child\" now: https://dreamville.lnk.to/middlechild Where the fuck is the off season YouTube ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/e8CLsYzE5wk/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/e8CLsYzE5wk/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/e8CLsYzE5wk/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "J. Cole",
            "liveBroadcastContent": "none"
          }
        }
      ]
    }
    let predicate: searchPridicate = new searchPridicate;
    predicate.query = "spongebob";
    dataService.search(predicate);
    dataService.setVideoList(response);
    dataService.currentVideoList.subscribe(result => { videoList = result; });
    expect(videoList.items.length).toBeGreaterThanOrEqual(0);
  });



});

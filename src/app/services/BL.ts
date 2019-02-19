import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, Subject, BehaviorSubject, observable } from 'rxjs';
import { ConfigService } from './DAL'
import { queryDef } from '@angular/core/src/view';
import { searchPridicate } from '../interfaces/interfaces';
import { response } from '../interfaces/interfaces'
import { promise } from 'protractor';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

    constructor(private _apiService: ConfigService) { }

    private videoListSource = new BehaviorSubject(new response);
    currentVideoList = this.videoListSource.asObservable();

    private channelSource = new BehaviorSubject(new response);
    currentChannel = this.channelSource.asObservable();

    private videoSource = new BehaviorSubject(new response);
    currentVideo = this.videoSource.asObservable();


    setVideoList(videosList: response) {
        this.videoListSource.next(videosList)
    }
    setCurrentVideo(video: response) {
        this.videoSource.next(video);
    }
    search(searchPredicate: searchPridicate) {
        // this._apiService.search(searchPredicate).toPromise().then((response) => {
        //     if (response) {
        //         debugger;
        //         this.setVideoList(response);
        //     }
        // });
        let responseObejct = {
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

        this.setVideoList(responseObejct)

    }
    getVideo(searchPredicate: searchPridicate) {

        let videoObject = {
            "kind": "youtube#videoListResponse",
            "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/yQYe9JuARyZXwKr9x9eDo-8w8QU\"",
            "pageInfo": {
                "totalResults": 1,
                "resultsPerPage": 1
            },
            "items": [
                {
                    "kind": "youtube#video",
                    "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/NEsbMsQHXGF0CWvfrf0SXun-T-E\"",
                    "id": "UOxkGD8qRB4",
                    "snippet": {
                        "publishedAt": "2018-11-03T07:30:00.000Z",
                        "channelId": "UC2t5bjwHdUX4vM2g8TRDq5g",
                        "title": "K/DA - POP/STARS (ft Madison Beer, (G)I-DLE, Jaira Burns) | Official Music Video - League of Legends",
                        "description": "K/DA Ahri, K/DA Evelynn, K/DA Kai’Sa, and K/DA Akali take the world stage with their debut single. Keep the show going on the Rift with these new Epic skins.\n\nMEET THE BAND:\n\nhttps://universe.leagueoflegends.com/en_US/kda\n\nLISTEN NOW:\n\nSpotify: http://smarturl.it/kdapopstars/spotify\nApple Music: http://smarturl.it/kdapopstars/applemusic\niTunes: http://smarturl.it/kdapopstars/itunes\nGoogle Play: http://smarturl.it/kdapopstars/googleplay\nDeezer: http://smarturl.it/kdapopstars/deezer\n\nPRODUCTION CREDITS:\n\nK/DA - \"POP/STARS\"\nFeatured artists: Madison Beer, (G)I-DLE, Jaira Burns \nWritten by: Riot Music Team and Harloe\nKorean translation by: Lydia Paek and Minji Kim  \nProduced by: Riot Music Team\nMixed by: Riot Music Team \nMastered by: Riot Music Team\nVocals performed by: Madison Beer, Miyeon of (G)I-DLE, Soyeon of (G)I-DLE, Jaira Burns\nAdditional vocals by: Harloe \nVocal production by: Riot Music Team\nExecutive Producers: Riot Games & Justin Tranter\n\nhttp://madisonbeer.com/\nhttp://www.cubeent.co.kr/gidle\nhttp://www.jairaburns.com/\n\nANIMATION: \n\nFortiche Prod\n\nLYRICS:\n\nYou know who it is\nComing 'round again\nYou want a dose of this\nRight now\nIt’s K/DA uh!\n\nI'm a goddess with a blade\n소리쳐봐 내 이름\n잊지 못하게\nLoud loud loud loud\nI could take it to the top\n절대 멈추지 못해\n내가 끝내주는\nBad gal gal gal\n\nAnd when I start to talk like that (like that)\nOh you won’t know how to react\nI’m a picture perfect face\nWith that wild in my veins\nYou can hear it in my\nGrowl, growl, growl, growl\n\nSo keep your eyes on me now\n무엇을 보든 좋아할 거야\n닿을 수 없는 level\n나와 대결 원한 널 확신해\nWe got it all in our hands now\nSo can you handle what we’re all about\nWe’re so tough\nNot scared to show you up\nCan you feel the rush now?\n\nAin’t nobody bringing us down down down down down down\nThey could try but we’re gonna wear the crown\nYou could go another round round round round round round round\nWish you luck but you’re not bringing us down\nWe go hard\nTill we get it get it\nWe go hard\nWe so in it in it\nWe POP/STARS\nOnly winning winning now\nAin’t nobody bringing us down down down down\n\nHey!\nYou ready for this? (Let's go!)\nSee 언제든지 내 모습 magic\n단 한 번에 내가 잡어\n절대 기죽지 않지 uh!\nPow pow 네가 뭘 알아\n견딜 수 없어, 원해도.\n원하는 게 얼굴에 보여\nI’m trouble and you’re wanting it\nI’m so cold\nWhen I move that way\nYou gonna be so blown\nI’m the realest in the game uh!\n\nSay I’m on fire with a blade\nYou’re about to hear my name\nRinging in your head like oh\n\nSo keep your eyes on me now\n무엇을 보든 좋아할 거야\nWe’re so tough\nNot scared to show you up\nCan you feel the rush now?\n\nAin’t nobody bringing us down down down down down down\nThey could try but we’re gonna wear the crown\nYou could go another round round round round round round round\nWish you luck but you’re not bringing us down\nWe go hard\nTill we get it get it\nWe go hard\nWe so in it in it\nWe POP/STARS\nOnly winning winning now\nAin’t nobody bringing us down down down down\n\nOh... 난 멈추지 않아\nOh oh we go hard\nOh oh we POP/STARS (stars), stars (stars)\n\nAin’t nobody bringing us\nAin’t nobody bringing us down down down down down down\nThey could try but we’re gonna wear the crown\nYou could go another round round round round round round round\nWish you luck but you’re not bringing us down\nWe go hard\nTill we get it get it\nWe go hard\nWe so in it in it\nWe POP/STARS\nOnly winning winning now\nAin’t nobody bringing us down down down down\n\nMORE RIOT GAMES MUSIC:\n\nhttps://www.youtube.com/user/RiotGamesInc/playlists?sort=dd&view=50&shelf_id=23\n\nPLAY LEAGUE OF LEGENDS:\n\nhttp://riot.com/signup\n\n#KDA #POPSTARS #LEAGUEOFLEGENDS",
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
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/UOxkGD8qRB4/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/UOxkGD8qRB4/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "League of Legends",
                        "tags": [
                            "Riot Games",
                            "Riot",
                            "League of Legends",
                            "League",
                            "LoL",
                            "MOBA",
                            "worlds pop song",
                            "worlds popstar",
                            "worlds music video",
                            "K/DA",
                            "Ahri",
                            "Kai’Sa",
                            "Evelynn",
                            "Eve",
                            "Akali",
                            "K/DA Ahri",
                            "K/DA Kai’Sa",
                            "K/DA kaisa",
                            "K/DA Evelynn",
                            "K/DA Eve",
                            "K/DA Akali",
                            "KDA Ahri",
                            "KDA Kai’Sa",
                            "KDA kaisa",
                            "KDA Evelynn",
                            "KDA Eve",
                            "KDA Akali",
                            "ahri kda",
                            "kaisa kda",
                            "eve kda",
                            "akali kda",
                            "evelynn kda",
                            "kai’sa kda",
                            "lol KDA"
                        ],
                        "categoryId": "20",
                        "liveBroadcastContent": "none",
                        "defaultLanguage": "en",
                        "localized": {
                            "title": "K/DA - POP/STARS (ft Madison Beer, (G)I-DLE, Jaira Burns) | Official Music Video - League of Legends",
                            "description": "K/DA Ahri, K/DA Evelynn, K/DA Kai’Sa, and K/DA Akali take the world stage with their debut single. Keep the show going on the Rift with these new Epic skins.\n\nMEET THE BAND:\n\nhttps://universe.leagueoflegends.com/en_US/kda\n\nLISTEN NOW:\n\nSpotify: http://smarturl.it/kdapopstars/spotify\nApple Music: http://smarturl.it/kdapopstars/applemusic\niTunes: http://smarturl.it/kdapopstars/itunes\nGoogle Play: http://smarturl.it/kdapopstars/googleplay\nDeezer: http://smarturl.it/kdapopstars/deezer\n\nPRODUCTION CREDITS:\n\nK/DA - \"POP/STARS\"\nFeatured artists: Madison Beer, (G)I-DLE, Jaira Burns \nWritten by: Riot Music Team and Harloe\nKorean translation by: Lydia Paek and Minji Kim  \nProduced by: Riot Music Team\nMixed by: Riot Music Team \nMastered by: Riot Music Team\nVocals performed by: Madison Beer, Miyeon of (G)I-DLE, Soyeon of (G)I-DLE, Jaira Burns\nAdditional vocals by: Harloe \nVocal production by: Riot Music Team\nExecutive Producers: Riot Games & Justin Tranter\n\nhttp://madisonbeer.com/\nhttp://www.cubeent.co.kr/gidle\nhttp://www.jairaburns.com/\n\nANIMATION: \n\nFortiche Prod\n\nLYRICS:\n\nYou know who it is\nComing 'round again\nYou want a dose of this\nRight now\nIt’s K/DA uh!\n\nI'm a goddess with a blade\n소리쳐봐 내 이름\n잊지 못하게\nLoud loud loud loud\nI could take it to the top\n절대 멈추지 못해\n내가 끝내주는\nBad gal gal gal\n\nAnd when I start to talk like that (like that)\nOh you won’t know how to react\nI’m a picture perfect face\nWith that wild in my veins\nYou can hear it in my\nGrowl, growl, growl, growl\n\nSo keep your eyes on me now\n무엇을 보든 좋아할 거야\n닿을 수 없는 level\n나와 대결 원한 널 확신해\nWe got it all in our hands now\nSo can you handle what we’re all about\nWe’re so tough\nNot scared to show you up\nCan you feel the rush now?\n\nAin’t nobody bringing us down down down down down down\nThey could try but we’re gonna wear the crown\nYou could go another round round round round round round round\nWish you luck but you’re not bringing us down\nWe go hard\nTill we get it get it\nWe go hard\nWe so in it in it\nWe POP/STARS\nOnly winning winning now\nAin’t nobody bringing us down down down down\n\nHey!\nYou ready for this? (Let's go!)\nSee 언제든지 내 모습 magic\n단 한 번에 내가 잡어\n절대 기죽지 않지 uh!\nPow pow 네가 뭘 알아\n견딜 수 없어, 원해도.\n원하는 게 얼굴에 보여\nI’m trouble and you’re wanting it\nI’m so cold\nWhen I move that way\nYou gonna be so blown\nI’m the realest in the game uh!\n\nSay I’m on fire with a blade\nYou’re about to hear my name\nRinging in your head like oh\n\nSo keep your eyes on me now\n무엇을 보든 좋아할 거야\nWe’re so tough\nNot scared to show you up\nCan you feel the rush now?\n\nAin’t nobody bringing us down down down down down down\nThey could try but we’re gonna wear the crown\nYou could go another round round round round round round round\nWish you luck but you’re not bringing us down\nWe go hard\nTill we get it get it\nWe go hard\nWe so in it in it\nWe POP/STARS\nOnly winning winning now\nAin’t nobody bringing us down down down down\n\nOh... 난 멈추지 않아\nOh oh we go hard\nOh oh we POP/STARS (stars), stars (stars)\n\nAin’t nobody bringing us\nAin’t nobody bringing us down down down down down down\nThey could try but we’re gonna wear the crown\nYou could go another round round round round round round round\nWish you luck but you’re not bringing us down\nWe go hard\nTill we get it get it\nWe go hard\nWe so in it in it\nWe POP/STARS\nOnly winning winning now\nAin’t nobody bringing us down down down down\n\nMORE RIOT GAMES MUSIC:\n\nhttps://www.youtube.com/user/RiotGamesInc/playlists?sort=dd&view=50&shelf_id=23\n\nPLAY LEAGUE OF LEGENDS:\n\nhttp://riot.com/signup\n\n#KDA #POPSTARS #LEAGUEOFLEGENDS"
                        },
                        "defaultAudioLanguage": "en"
                    },
                    "contentDetails": {
                        "duration": "PT3M23S",
                        "dimension": "2d",
                        "definition": "hd",
                        "caption": "true",
                        "licensedContent": true,
                        "projection": "rectangular"
                    },
                    "statistics": {
                        "viewCount": "174318046",
                        "likeCount": "2923180",
                        "dislikeCount": "62574",
                        "favoriteCount": "0",
                        "commentCount": "181747"
                    }
                }
            ]
        }
        const studentsObservable = new Observable(observer => {
            observer.next(videoObject);
        });

        return studentsObservable;
        //    return this._apiService.getVideo(searchPredicate).toPromise().then((response: response) => {
        //         if (response) {
        //             return response;
        //         }
        //     });

    }
    getRelatedVideo(searchPredicate: searchPridicate) {
        let relatedVideo: response = {
            "kind": "youtube#searchListResponse",
            "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/_Ks_29thFRsWIo9ciVSQnub5zjc\"",
            "nextPageToken": "CAoQAA",
            "regionCode": "EG",
            "pageInfo": {
                "totalResults": 614,
                "resultsPerPage": 10
            },
            "items": [
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/SLE0fOkyf8DkZN9txz7b-mVBj9M\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "fB8TyLTD7EE"
                    },
                    "snippet": {
                        "publishedAt": "2018-09-24T23:22:34.000Z",
                        "channelId": "UC2t5bjwHdUX4vM2g8TRDq5g",
                        "title": "RISE (ft. The Glitch Mob, Mako, and The Word Alive) | Worlds 2018 - League of Legends",
                        "description": "Reaching the peak takes more than skill. Only those with the ambition to RISE above all others will know its height.\n\nFor more information on the 2018 League of Legends World Championship visit http://www.lolesports.com.\n\n“RISE”\nFeatured artists: The Glitch Mob, Mako, and The Word Alive\nWritten by: Riot Music Team and Alex Seaver of Mako\nAdditional writing by: Justin Tranter\nProduced by: Riot Music Team, Alex Seaver of Mako, and The Glitch Mob\nAdditional production by: HEALTH\nMixed by: Miles Walker at Silent Sound Studios\nAssisted by: Ryan Jumper\nMastered by: Riot Music Team\nVocals performed by: Mako and The Word Alive\nVocal production by: Riot Music Team and Alex Seaver of Mako\nThe Word Alive appears courtesy of Fearless Records\n\nhttps://theglitchmob.com/\nhttps://www.wearemako.com/\nhttps://wearethewordalive.com/ \n\n************************************************\n\nListen Now:\nSpotify: http://smarturl.it/ewxshd/spotify\nApple Music: http://smarturl.it/ewxshd/applemusic\niTunes: http://smarturl.it/ewxshd/itunes\nGooglePlay: http://smarturl.it/ewxshd/googleplay\nDeezer: http://smarturl.it/ewxshd/deezer\n\n************************************************\n\nWelcome to the wild, no heroes and villains\nWelcome to the war we've only begun, so\nPick up your weapon and face it\nThere's blood on the crown go and take it\nYou get one shot to make it out alive, so\nHigher and higher you chase it\nIt’s deep in your bones, go and take it\nThis is your moment, now is your time, so\n\nProve yourself and \nRISE, RISE\nMake 'em remember you\nRISE\nPush through hell and \nRISE, RISE\nThey will remember you\nRISE\n\nWelcome to the climb up, reach for the summit\nVisions pray that one false step lead the end, so\nHigher and higher you chase it\nIt's deep in your blood, go and take it\nThis is your moment, take to the skies, go\n\nProve yourself and \nRISE, RISE\nMake 'em remember you\nRISE\nPush through hell and \nRISE, RISE\nThey will remember you\nRISE\n\nSo get along, so get along, go\nGet along 'long get a move on up\nSo get along, so get along, go\nGet along 'long get a move on up\nAnd as you fight among the death beneath the dirt\nDo you know yet?\nDo you want it?\nAnd when the giants call to ask you what you're worth\nDo you know if,\nWin or die, you'll\n\nProve yourself and \nRISE, RISE\nMake 'em remember you\nRISE\nPush through hell and \nRISE, RISE\nThey will remember you\nRISE\nProve yourself and RISE, RISE\n(Pick up your weapon and face it)\nRISE\n(It’s deep in your blood, go and take it)\nRISE, RISE\n(Higher and higher you chase it)\nRISE, RISE",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/fB8TyLTD7EE/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/fB8TyLTD7EE/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/fB8TyLTD7EE/hqdefault.jpg",
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
                    "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/FuuhT3QMoCVHgZRCAAWwiB9Zkf4\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "ndCxBy7dNu0"
                    },
                    "snippet": {
                        "publishedAt": "2018-06-02T00:59:41.000Z",
                        "channelId": "UCzwzvW42LCniaNXxwGJDT5g",
                        "title": "「Nightcore」→ Havana ✗ Despacito ✗ Believer ✗ Shape of you ✗ Rockabye and MORE (Switching Vocal)",
                        "description": "「Nightcore」→ Havana ✗ Despacito ✗ Believer ✗ Shape of you ✗ Rockabye and MORE (Switching Vocal)\n▼If you want more Informations▼\nOwO  SUBSCRIBE FOR JOINING TEAM ZWERGI OwO\n▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ \n▼This is my new song▼\n\n\nWatch the original version of this mashup by Rosendale! https://youtu.be/tQgCwPqC6IA\n\n\nList of Songs:\n\n“Shape Of You” - Ed Sheeran\n“Rockabye” - Clean Bandit ft. Sean Paul & Anne-Marie \n“Paris” - The Chainsmokers\n“Chained To the Rhythm” - Katy Perry ft. Skip Marley\n“Scars To Your Beautiful” - Alessia Cara\n“Attention\" - Charlie Puth\n“Bad Things” - Machine Gun Kelly, Camila Cabello\n“I Don’t Wanna Live Forever” - ZAYN, Taylor Swift\n“Sign of the Times” - Harry Styles\n“Million Reasons” - Lady Gaga\n“Malibu” - Miley Cyrus\n“Passionfruit” - Drake\n“It Ain’t Me” - Kygo, Selena Gomez\n“Something Just Like This” - Coldplay, The Chainsmokers\n“Unforgettable” - French Montana ft. Swae Lee\n“Wild Thoughts” - DJ Khaled ft. Rihanna & Bryson Tiller\n“1-800-273-8255” - Logic ft. Alessia Cara & Khalid\n“Stay” - Zedd ft. Alessia Cara\n“Despacito” - Luis Fonsi ft. Daddy Yankee & Justin Bieber\n“I’m The One” - DJ Khaled ft. Justin Bieber, Quavo, Chance the Rapper, Lil Wayne\n“There’s Nothing Holdin’ Me Back” - Shawn Mendes\n“Congratulations” - Post Malone ft. Quavo\n“Bodak Yellow” - Cardi B\n“Look What You Made Me Do” - Taylor Swift\n“Believer” - Imagine Dragons\n“Sorry Not Sorry” - Demi Lovato\n“Havana” - Camila Cabello ft. Young Thug\n“Perfect” - Ed Sheeran\n“Too Good At Goodbyes\" - Sam Smith\n\nPicture link: https://i.imgur.com/0OTIPJv.png\n\nPlease enjoy :3 have a nice day \n▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ \n▼If you want more, join, follow and help me!▼\n\n➥https://www.nightcore.com/ (network)\n➥Discord : https://discord.gg/RC6uqs2\n➥Twitter: https://twitter.com/loltop8\n➥Instagram: https://www.instagram.com/dominikwvv/\n➥facebook: https://www.facebook.com/dominik.wuestvonvellberg\n➥Twitch: https://www.twitch.tv/zwergiyt\n➥Soundcloud: https://soundcloud.com/premiumclickbait\n▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ \n▼Disclaimer▼\n\nI don't own anything in the video, including the audio and picture.\nThe credits go to the respective owners. I've just ''nightcored'' the \nsong, which means i pitched it up and sped it up. If you are the owner of the song please send me an email on this mail address and i will remove the song:domianime@web.de\n▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ \n\n\n────── ✧ ADDITIONAL DETAILS ✧ ──────\n\n ►  Video → Sony Vegas Pro 14\n ►  Audio → Audition\n\n\n▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ \n\n\n─── ✎ POPULAR MUSIC ON YOUTUBE ✎ ───\n\n\n ✘  Camila Cabello - Havana\n ✘  Ed Sheeran - Perfect\n ✘  Dua Lipa - New Rules\n ✘  Dua Lipa - IDGAF\n ✘  Imagine Dragons - Believer\n ✘  Marshmello & Anne-Marie - FRIENDS\n ✘  Zedd, Maren Morris, Grey - The Middle\n ✘  XXXTENTACION - SAD!\n ✘  Imagine Dragons - Radioactive\n ✘  J Balvin, Willy William - Mi Gente\n ✘  Post Malone Feat. Ty Dolla $ign - Psycho\n ✘  Post Malone - rockstar\n ✘  Imagine Dragons - Radioactive\n ✘  G-Eazy & Halsey - Him & I\n ✘  The Chainsmokers - You Owe Me\n ✘  The Chainsmokers - Sick Boy\n ✘  Taylor Swift - Delicate\n ✘  Drake - God’s Plan\n ✘  Luis Fonsi - Despacito\n ✘  Alan Walker - Faded\n ✘  Camila Cabello - Never Be The Same\n ✘  Selena Gomez, Marshmello - Wolves\n ✘  P!nk - Beautiful Trauma\n ✘  Imagine Dragons - Next To Me\n▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/ndCxBy7dNu0/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/ndCxBy7dNu0/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/ndCxBy7dNu0/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "Zwergi Nightcore",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/zY8_YAesYDonvBdD-xjHeypzXkg\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "yu4mkuJKEFE"
                    },
                    "snippet": {
                        "publishedAt": "2018-11-03T09:17:59.000Z",
                        "channelId": "UCRyWqyT0ayVg1afxERhwWUA",
                        "title": "[1 Hour] K/DA - POP/STARS (ft Madison Beer, (G)I-DLE, Jaira Burns) | League of Legends Music Video",
                        "description": "[1 Hour] K/DA - POP/STARS (ft Madison Beer, (G)I-DLE, Jaira Burns) | League of Legends Music Video\nK/DA Ahri, K/DA Evelynn, K/DA Kai’Sa, and K/DA Akali take the world stage with their debut single. Keep the show going on the Rift with these new Epic skins.\n\nLISTEN NOW:\n\nSpotify: http://smarturl.it/kdapopstars/spotify\nApple Music: (Available Nov 4th)\niTunes: (Available Nov 4th)\nGoogle Play: (Available Nov 4th)\nDeezer: (Available Nov 4th)\n\n\nPRODUCTION CREDITS:\n\nK/DA - \"POP/STARS\"\nFeatured artists: Madison Beer, (G)I-DLE, Jaira Burns \nWritten by: Riot Music Team and Harloe\nKorean translation by: Lydia Paek and Minji Kim  \nProduced by: Riot Music Team\nMixed by: Riot Music Team \nMastered by: Riot Music Team\nVocals performed by: Madison Beer, Miyeon of (G)I-DLE, Soyeon of (G)I-DLE, Jaira Burns\nAdditional vocals by: Harloe \nVocal production by: Riot Music Team\nExecutive Producers: Riot Games & Justin Tranter\n\nhttp://madisonbeer.com/\nhttp://www.cubeent.co.kr/gidle\nhttp://www.jairaburns.com/\n\n\nLYRICS:\n\nYou know who it is\nComing 'round again\nYou want a dose of this\nRight now\nIt’s K/DA uh!\n\nI'm a goddess with a blade\n소리쳐봐 내 이름\n잊지 못하게\nLoud loud loud loud\nI could take it to the top\n절대 멈추지 못해\n내가 끝내주는\nBad gal gal gal\n\nAnd when I start to talk like that (like that)\nOh you won’t know how to react\nI’m a picture perfect face\nWith that wild in my veins\nYou can hear it in my\nGrowl, growl, growl, growl\n\nSo keep your eyes on me now\n무엇을 보든 좋아할 거야\n닿을 수 없는 level\n나와 대결 원한 널 확신해\nWe got it all in our hands now\nSo can you handle what we’re all about\nWe’re so tough\nNot scared to show you up\nCan you feel the rush now?\n\nAin’t nobody bringing us down down down down down down\nThey could try but we’re gonna wear the crown\nYou could go another round round round round round round round\nWish you luck but you’re not bringing us down\nWe go hard\nTill we get it get it\nWe go hard\nWe so in it in it\nWe POP/STARS\nOnly winning winning now\nAin’t nobody bringing us down down down down\n\nHey!\nYou ready for this? (Let's go!)\nSee 언제든지 내 모습 magic\n단 한 번에 내가 잡어\n절대 기죽지 않지 uh!\nPow pow 네가 뭘 알아\n견딜 수 없어, 원해도.\n원하는 게 얼굴에 보여\nI’m trouble and you’re wanting it\nI’m so cold\nWhen I move that way\nYou gonna be so blown\nI’m the realest in the game uh!\n\nSay I’m on fire with a blade\nYou’re about to hear my name\nRinging in your head like oh\n\nSo keep your eyes on me now\n무엇을 보든 좋아할 거야\nWe’re so tough\nNot scared to show you up\nCan you feel the rush now?\n\nAin’t nobody bringing us down down down down down down\nThey could try but we’re gonna wear the crown\nYou could go another round round round round round round round\nWish you luck but you’re not bringing us down\nWe go hard\nTill we get it get it\nWe go hard\nWe so in it in it\nWe POP/STARS\nOnly winning winning now\nAin’t nobody bringing us down down down down\n\nOh... 난 멈추지 않아\nOh oh we go hard\nOh oh we POP/STARS (stars), stars (stars)\n\nAin’t nobody bringing us\nAin’t nobody bringing us down down down down down down\nThey could try but we’re gonna wear the crown\nYou could go another round round round round round round round\nWish you luck but you’re not bringing us down\nWe go hard\nTill we get it get it\nWe go hard\nWe so in it in it\nWe POP/STARS\nOnly winning winning now\nAin’t nobody bringing us down down down down\n\nMORE RIOT RECORDS:\n\nTracks and albums from the makers of League of Legends: https://www.youtube.com/user/RiotGame... \n\nPLAY LEAGUE OF LEGENDS:\n\nhttp://riot.com/signup\n----------------------------------------\u00ad-------------\u00ad-------------\u00ad---\n● #KDA_POP_STARS_1_Hour (ft Madison Beer, (G)I-DLE, Jaira Burns) | League of Legends Music Video\n----------------------------------------\u00ad-------------\u00ad-------------\u00ad---\nKDA  POP STARS 1 Hour Replays\n----------------------------------------\u00ad-------------\u00ad-------------\u00ad---\n*If you as an artist(artwork or music)/label have anything against my uploads (use of content etc.), please don't make a scene, send me a private message here (YouTube), Google+ or my email address: probinson94na@gmail.com and I'll take it down. Thank you.",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/yu4mkuJKEFE/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/yu4mkuJKEFE/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/yu4mkuJKEFE/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "SNCH",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/N2Nr16UwAXCVJxU0U2q9KWz3K_A\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "b73BI9eUkjM"
                    },
                    "snippet": {
                        "publishedAt": "2018-11-12T07:35:35.000Z",
                        "channelId": "UCOmHUn--16B90oW2L6FRR3A",
                        "title": "JENNIE - 'SOLO' M/V",
                        "description": "Download on Apple Music @ http://smarturl.it/SOLOJennie/applemusic\n \nDownload on iTunes @ http://smarturl.it/SOLOJennie/itunes\n\nAvailable now on Spotify @ http://smarturl.it/SOLOJennie/spotify\n\n#BLACKPINK #블랙핑크 #JENNIE #제니 #SOLO #MV #20181112_6PM #OUTNOW #YG\n\nMore about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygent_official",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/b73BI9eUkjM/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/b73BI9eUkjM/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/b73BI9eUkjM/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "BLACKPINK",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/k9B6AjUuqzCjKI8qcaAimSQHbco\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "gj-VU9oK2Yo"
                    },
                    "snippet": {
                        "publishedAt": "2018-10-08T16:27:05.000Z",
                        "channelId": "UCEf_Bc-KVd7onSeifS3py9g",
                        "title": "NCT 127 엔시티 127 'Regular (English Ver.)' MV",
                        "description": "Listen and download on iTunes & Apple Music, Spotify, and Google Play Music http://smarturl.it/regular_irregular\n＞Regular (Korean Ver.) MV: https://youtu.be/Gif0E6jYakM\n\n[Tracklist]\n01 지금 우리 (City 127)\n02 Regular (Korean Ver.)\n03 Replay (PM 01:27)\n04 Knock On\n05 나의 모든 순간 (No Longer)\n06 Interlude: Regular to Irregular\n07 내 Van (My Van)\n08 악몽 (Come Back)\n09 신기루 (Fly Away With Me)\n10 Regular (English Ver.)\n11 (Bonus Track) Run Back 2 U\n\nNCT 127 Official\nhttp://www.nct2018.com\nhttp://www.youtube.com/nct127\nhttp://www.youtube.com/chnct\nhttp://www.facebook.com/NCT.smtown\nhttp://www.instagram.com/nct127\nhttp://twitter.com/NCTsmtown_127\n\n#NCT127 #Regular #Regular_Irregular\nNCT 127 엔시티 127 'Regular (English Ver.)' MV ℗ SM Entertainment",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/gj-VU9oK2Yo/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/gj-VU9oK2Yo/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/gj-VU9oK2Yo/hqdefault.jpg",
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
                    "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/2s2jHn5-1RT6onag7ejsANApKyI\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "ApXoWvfEYVU"
                    },
                    "snippet": {
                        "publishedAt": "2018-10-17T15:48:55.000Z",
                        "channelId": "UCOhtMAg7xh8wv_wUHMgFc-Q",
                        "title": "Post Malone, Swae Lee - Sunflower (Spider-Man: Into the Spider-Verse)",
                        "description": "\"Sunflower\" is the first single from the official soundtrack album Spider-Man™: Into the Spider-Verse (available December 14, 2018). The film opens in theaters nationwide the same day. Get the song here: https://postmalone.lnk.to/sunflowerYD\n\nThe single re-teams Post Malone & Swae Lee after the two joined forces for “Spoil My Night” from the year’s biggest multi-platinum album, beerbongs & bentleys.\n\nFor more info on Post Malone:\nhttp://www.postmalone.com\nhttps://instagram.com/postmalone\nhttps://twitter.com/postmalone\nhttps://facebook.com/postmalone\n\nFor more info on Swae Lee:\nhttps://instagram.com/swaelee\nhttps://twitter.com/goSwaeLee\nhttps://facebook.com/swaelee\n\nFollow Spider-Man™: Into the Spider-Verse:\nhttps://www.facebook.com/SpiderVerseMovie\nhttps://www.twitter.com/SpiderVerse\nhttps://instagram.com/SpiderVerseMovie\n\nPhil Lord and Christopher Miller, the creative minds behind The Lego Movie and 21 Jump Street, bring their unique talents to a fresh vision of a different Spider-Man Universe, with a groundbreaking visual style that’s the first of its kind. Spider-Man™: Into the Spider-Verse introduces Brooklyn teen Miles Morales, and the limitless possibilities of the Spider-Verse, where more than one can wear the mask.\n\nCast: \nShameik Moore\nHailee Steinfeld\nMahershala Ali\nJake Johnson\nLiev Schreiber\nBrian Tyree Henry\nLuna Lauren Velez\nLily Tomlin\nNicolas Cage\nJohn Mulaney\nKimiko Glenn\n\n©2018 Columbia Pictures Industries, Inc. All Rights Reserved. MARVEL and all related character names\n\n© & ™ 2018 MARVEL\n\n#PostMalone #SwaeLee #IntoTheSpiderVerse #SpiderMan #Marvel #MilesMorales",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/ApXoWvfEYVU/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/ApXoWvfEYVU/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/ApXoWvfEYVU/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "PostMaloneVEVO",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/fQIdtNRZOjXeL9ItC29EdickF2s\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "DbabQ18hwtQ"
                    },
                    "snippet": {
                        "publishedAt": "2017-12-04T10:24:09.000Z",
                        "channelId": "UC2EnwLe6j4GovEb8N3WZXBA",
                        "title": "HYUNA (현아) – 'LIP & HIP' Lyrics [Han_Rom_Eng]",
                        "description": "By - Hamtaro Gasa\n\nThanks for watching! Please LIKE and SHARE this video! Don't forget to SUBSCRIBE our channel.\n\nALL RIGHTS ADMINISTERED by Cube ENTERTAINMENT\n\nWe do not own the MUSIC. All rights reserved to the original owner.\n\n[This for entertainment purpose only!]\n\nHyuna Lip & Hip\n\nHyuna Lip & Hip lyrics\n\nHyuna Lip & Hip color coded lyrics\n\nHyuna Lip & Hip eng lyrics\n\nLip & Hip lyrics\n\nHyuna Lip & Hip audio\n\nHyuna Lip & Hip live\n\nHyuna Lip & Hip concert\n\nHyuna Lip & Hip music video\n\nHyuna Lip & Hip mv\n\nHyuna Lip & Hip showcase\n\nLip & Hip Hyuna Lyrics\n\nHyuna Lip & Hip Mama 2017\n\n현아",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/DbabQ18hwtQ/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/DbabQ18hwtQ/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/DbabQ18hwtQ/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "Hamtaro Gasa",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/aFTXxxh6uqb9cCFx2s3eB-GPMA0\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "vzNcSvKCOyA"
                    },
                    "snippet": {
                        "publishedAt": "2017-11-17T02:11:09.000Z",
                        "channelId": "UC2t5bjwHdUX4vM2g8TRDq5g",
                        "title": "Varus: As We Fall [OFFICIAL MUSIC VIDEO] | League of Legends Music",
                        "description": "Witness the incarnation of vengeance. Part 2 of the Retribution arc. \n\nPART ONE AND THREE OF THE RETRIBUTION ARC HERE: https://universe.leagueoflegends.com/en_US/comic/varus/issue-1/     \n\n\nDownload available via SoundCloud: https://soundcloud.com/leagueoflegends/as-we-fall-league-of-legends\n\n\nLYRICS:\n\nTell me where do I go\nTell me where do I take us\nYour heart is starting to slow\nMay the water be safer\nAs I dive in\n\nBlood stains washing underneath the waves\n(As we fall, as we fall)\nI'll be reaching out to keep you safe\n(as we fall, as we fall, as we fall)\n\nI can’t hold on much longer\nWe’re drifting down to the other side\nTried to pull us under\nKeep holding out for the other side\n\nTell me where do I go\nTell me where do I take us\nTell me where do I go\nTell me where do I take us\n\nYour heart is starting to slow\nMay the water be safer\nAs I dive in\n\nYour heart is starting to slow\nMay the water be safer\nAs we fall\n\nI can’t hold on much longer\nWe’re drifting down to the other side\nTried to pull us under\nKeep holding out for the other side\n\n\nMORE STORIES AND ART FROM THE LEAGUE UNIVERSE:\n\nhttps://universe.leagueoflegends.com/en_US/    \n\n\nMORE RIOT RECORDS:\n\nTracks and albums from the makers of League of Legends: https://www.youtube.com/user/RiotGamesInc/playlists?shelf_id=23&sort=dd&view=50 \n\n\nPLAY THE GAME:\n\nTake control of Varus and over 130 other champions: https://www.youtube.com/watch?v=BGtROJeMPeE",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/vzNcSvKCOyA/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/vzNcSvKCOyA/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/vzNcSvKCOyA/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "League of Legends",
                        "liveBroadcastContent": "none"
                    }
                }
            ]
        }
        this.setVideoList(relatedVideo);
        return relatedVideo;
        this._apiService.getRelatedVideos(searchPredicate).toPromise().then((response) => {
            if (response) {
                this.setVideoList(response);
            }
        });
    }
    setChannelDetails(channel: response) {
        this.channelSource.next(channel);
    }
    getChannelDetails(searchPredicate: searchPridicate) {
        let channelDetails = {
            "kind": "youtube#channelListResponse",
            "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/qy-AadaJqvngRhoNHr5RYTBX6Yw\"",
            "pageInfo": {
             "totalResults": 1,
             "resultsPerPage": 1
            },
            "items": [
             {
              "kind": "youtube#channel",
              "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/M4GYrGBcw9QZdLNPo5y7jD3R1K8\"",
              "id": "UC2t5bjwHdUX4vM2g8TRDq5g",
              "snippet": {
               "title": "League of Legends",
               "description": "Recently recognized as the most played video game in the world—100 million play every month—League of Legends® is a multiplayer online battle arena game (MOBA).\n\nPlayers choose a role from an expanding cast of powerful champions and join forces in strategic, fast-paced gameplay to take control of the enemy’s end of the battlefield.\n\nSign up for a free League of Legends account at http://riot.com/signup",
               "customUrl": "RiotGamesInc",
               "publishedAt": "2009-02-09T20:19:08.000Z",
               "thumbnails": {
                "default": {
                 "url": "https://yt3.ggpht.com/a-/AAuE7mBabm11q4VVKRh2xsSoe9f0ArJXSbRkwp2ZSQ=s88-mo-c-c0xffffffff-rj-k-no",
                 "width": 88,
                 "height": 88
                },
                "medium": {
                 "url": "https://yt3.ggpht.com/a-/AAuE7mBabm11q4VVKRh2xsSoe9f0ArJXSbRkwp2ZSQ=s240-mo-c-c0xffffffff-rj-k-no",
                 "width": 240,
                 "height": 240
                },
                "high": {
                 "url": "https://yt3.ggpht.com/a-/AAuE7mBabm11q4VVKRh2xsSoe9f0ArJXSbRkwp2ZSQ=s800-mo-c-c0xffffffff-rj-k-no",
                 "width": 800,
                 "height": 800
                }
               },
               "localized": {
                "title": "League of Legends",
                "description": "Recently recognized as the most played video game in the world—100 million play every month—League of Legends® is a multiplayer online battle arena game (MOBA).\n\nPlayers choose a role from an expanding cast of powerful champions and join forces in strategic, fast-paced gameplay to take control of the enemy’s end of the battlefield.\n\nSign up for a free League of Legends account at http://riot.com/signup"
               },
               "country": "US"
              },
              "statistics": {
               "viewCount": "2811700611",
               "commentCount": "0",
               "subscriberCount": "10529055",
               "hiddenSubscriberCount": false,
               "videoCount": "961"
              },
              "brandingSettings": {
               "channel": {
                "title": "League of Legends",
                "description": "Recently recognized as the most played video game in the world—100 million play every month—League of Legends® is a multiplayer online battle arena game (MOBA).\n\nPlayers choose a role from an expanding cast of powerful champions and join forces in strategic, fast-paced gameplay to take control of the enemy’s end of the battlefield.\n\nSign up for a free League of Legends account at http://riot.com/signup",
                "keywords": "LoL MMO Online Community Summoner Champion MMORPG RTS Riot Games \"Riot Games\" \"League of Legends\"",
                "defaultTab": "Featured",
                "trackingAnalyticsAccountId": "UA-5859958-5",
                "moderateComments": true,
                "showRelatedChannels": true,
                "showBrowseView": true,
                "featuredChannelsTitle": "Featured Channels",
                "featuredChannelsUrls": [
                 "UCvqRdlKsE5Q8mf8YXbdIJLw",
                 "UCzAypSoOFKCZUts3ULtVT_g",
                 "UCxqlOPlFDqMxWCYntmLCwzg",
                 "UCrh24N5HpJ_MXpIfcI7znlQ",
                 "UC6Xqz2pm50gDCORYztqhDpg",
                 "UCmvoPMHe9l0ytr9ONu5-1vw",
                 "UCgSPTEKkw5LT-PvdFO6FOuQ",
                 "UCJ6EyrObjc396m3MToJhblQ",
                 "UC--ZPnXHsS_2hbHWrzgg1GQ",
                 "UCZhTCQiHQzyzPa78qASRooA",
                 "UC8bAJL54pjWHayyxrsAOo2Q",
                 "UCU-l1ajszDLFd6lWyCs1_GA",
                 "UC6yuFHuoNYgYABOHYbwQk4w",
                 "UC1vQzYlq4ecWBcFe0vh50Rg",
                 "UC_aku-WGRZyQJ9QyaYMNyrw",
                 "UCV4hJXbC8ca4EE96A9qMbFQ",
                 "UC4NPWtnzf_wE5bIGGDT4igw",
                 "UCooLkG0FfrkPBQsSuC95L6w",
                 "UCJEGvSZnQ1pkVfHO8s5G8hA",
                 "UC4KvdihNRDcMx_yoaFE4tEg",
                 "UCyi6e6vg93m0VUyI05PGgow",
                 "UCyFKOPtaQNDUzmeTDAQ5aPQ",
                 "UC8RToqB1bw_aaon_70bdDqg",
                 "UCO-3G4XJ65p86pZrS08vqew",
                 "UCekadoaN7x7g7FlmKg13jWg",
                 "UCA-2N1Dyprk2FK9HzjM_jew",
                 "UCG_wKjFPEpdHf1Q6bTdE2JA",
                 "UCLnIWRRC5VLR6d7hvP-GjBQ"
                ],
                "unsubscribedTrailer": "8fwwGCr1-po",
                "profileColor": "#000000",
                "country": "US"
               },
               "image": {
                "bannerImageUrl": "https://yt3.ggpht.com/XibrTm6Jn4LKQQiXxVuBiXDVek-pi2pCC8smL18TqclSYuuzv8NEPTzMUlro5YGYtJS4hDBLXQ=w1060-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no",
                "bannerMobileImageUrl": "https://yt3.ggpht.com/XibrTm6Jn4LKQQiXxVuBiXDVek-pi2pCC8smL18TqclSYuuzv8NEPTzMUlro5YGYtJS4hDBLXQ=w640-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no",
                "bannerTabletLowImageUrl": "https://yt3.ggpht.com/XibrTm6Jn4LKQQiXxVuBiXDVek-pi2pCC8smL18TqclSYuuzv8NEPTzMUlro5YGYtJS4hDBLXQ=w1138-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no",
                "bannerTabletImageUrl": "https://yt3.ggpht.com/XibrTm6Jn4LKQQiXxVuBiXDVek-pi2pCC8smL18TqclSYuuzv8NEPTzMUlro5YGYtJS4hDBLXQ=w1707-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no",
                "bannerTabletHdImageUrl": "https://yt3.ggpht.com/XibrTm6Jn4LKQQiXxVuBiXDVek-pi2pCC8smL18TqclSYuuzv8NEPTzMUlro5YGYtJS4hDBLXQ=w2276-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no",
                "bannerTabletExtraHdImageUrl": "https://yt3.ggpht.com/XibrTm6Jn4LKQQiXxVuBiXDVek-pi2pCC8smL18TqclSYuuzv8NEPTzMUlro5YGYtJS4hDBLXQ=w2560-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no",
                "bannerMobileLowImageUrl": "https://yt3.ggpht.com/XibrTm6Jn4LKQQiXxVuBiXDVek-pi2pCC8smL18TqclSYuuzv8NEPTzMUlro5YGYtJS4hDBLXQ=w320-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no",
                "bannerMobileMediumHdImageUrl": "https://yt3.ggpht.com/XibrTm6Jn4LKQQiXxVuBiXDVek-pi2pCC8smL18TqclSYuuzv8NEPTzMUlro5YGYtJS4hDBLXQ=w960-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no",
                "bannerMobileHdImageUrl": "https://yt3.ggpht.com/XibrTm6Jn4LKQQiXxVuBiXDVek-pi2pCC8smL18TqclSYuuzv8NEPTzMUlro5YGYtJS4hDBLXQ=w1280-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no",
                "bannerMobileExtraHdImageUrl": "https://yt3.ggpht.com/XibrTm6Jn4LKQQiXxVuBiXDVek-pi2pCC8smL18TqclSYuuzv8NEPTzMUlro5YGYtJS4hDBLXQ=w1440-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no",
                "bannerTvImageUrl": "https://yt3.ggpht.com/XibrTm6Jn4LKQQiXxVuBiXDVek-pi2pCC8smL18TqclSYuuzv8NEPTzMUlro5YGYtJS4hDBLXQ=w2120-fcrop64=1,00000000ffffffff-nd-c0xffffffff-rj-k-no",
                "bannerTvLowImageUrl": "https://yt3.ggpht.com/XibrTm6Jn4LKQQiXxVuBiXDVek-pi2pCC8smL18TqclSYuuzv8NEPTzMUlro5YGYtJS4hDBLXQ=w854-fcrop64=1,00000000ffffffff-nd-c0xffffffff-rj-k-no",
                "bannerTvMediumImageUrl": "https://yt3.ggpht.com/XibrTm6Jn4LKQQiXxVuBiXDVek-pi2pCC8smL18TqclSYuuzv8NEPTzMUlro5YGYtJS4hDBLXQ=w1280-fcrop64=1,00000000ffffffff-nd-c0xffffffff-rj-k-no",
                "bannerTvHighImageUrl": "https://yt3.ggpht.com/XibrTm6Jn4LKQQiXxVuBiXDVek-pi2pCC8smL18TqclSYuuzv8NEPTzMUlro5YGYtJS4hDBLXQ=w1920-fcrop64=1,00000000ffffffff-nd-c0xffffffff-rj-k-no"
               },
               "hints": [
                {
                 "property": "channel.featured_tab.template.string",
                 "value": "Everything"
                },
                {
                 "property": "channel.modules.show_comments.bool",
                 "value": "True"
                },
                {
                 "property": "channel.banner.mobile.medium.image.url",
                 "value": "https://yt3.ggpht.com/XibrTm6Jn4LKQQiXxVuBiXDVek-pi2pCC8smL18TqclSYuuzv8NEPTzMUlro5YGYtJS4hDBLXQ=w640-fcrop64=1,32b75a57cd48a5a8-nd-c0xffffffff-rj-k-no"
                }
               ]
              }
             }
            ]
           }
           
        const channelObservable = new Observable(observer => {
            observer.next(channelDetails);
        });

        return channelObservable;
        // this._apiService.getChannelDetails(searchPredicate).toPromise().then((response) => {
        //     if (response) {
        //         this.setChannelDetails(response);
        //     }
        // });
    }

    getChannelPlaylist(searchPredicate : searchPridicate){

        let playlist = {
            "kind": "youtube#playlistListResponse",
            "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/0JjqpE0SeKCdiKCmEZa8mPZNCC0\"",
            "nextPageToken": "CAoQAA",
            "pageInfo": {
             "totalResults": 47,
             "resultsPerPage": 10
            },
            "items": [
             {
              "kind": "youtube#playlist",
              "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/ZMkXtKcKdj9bYGzTZ79iBYrQTv8\"",
              "id": "PLbAFXJC0J5GanbANaPaaWYB6Vdc_JPZ6n",
              "snippet": {
               "publishedAt": "2018-07-06T23:25:47.000Z",
               "channelId": "UC2t5bjwHdUX4vM2g8TRDq5g",
               "title": "Play Your Way | League of Legends",
               "description": "",
               "thumbnails": {
                "default": {
                 "url": "https://i.ytimg.com/vi/D4DP-9oMfm4/default.jpg",
                 "width": 120,
                 "height": 90
                },
                "medium": {
                 "url": "https://i.ytimg.com/vi/D4DP-9oMfm4/mqdefault.jpg",
                 "width": 320,
                 "height": 180
                },
                "high": {
                 "url": "https://i.ytimg.com/vi/D4DP-9oMfm4/hqdefault.jpg",
                 "width": 480,
                 "height": 360
                },
                "standard": {
                 "url": "https://i.ytimg.com/vi/D4DP-9oMfm4/sddefault.jpg",
                 "width": 640,
                 "height": 480
                },
                "maxres": {
                 "url": "https://i.ytimg.com/vi/D4DP-9oMfm4/maxresdefault.jpg",
                 "width": 1280,
                 "height": 720
                }
               },
               "channelTitle": "League of Legends",
               "localized": {
                "title": "Play Your Way | League of Legends",
                "description": ""
               }
              },
              "contentDetails": {
               "itemCount": 3
              }
             },
             {
              "kind": "youtube#playlist",
              "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/3AOitidw01JdIGy68FWDsLRWcrc\"",
              "id": "PLbAFXJC0J5GZOzHeeZgyz4wWxP3z-4ulz",
              "snippet": {
               "publishedAt": "2018-05-31T15:01:22.000Z",
               "channelId": "UC2t5bjwHdUX4vM2g8TRDq5g",
               "title": "Legends of Bilgewater",
               "description": "",
               "thumbnails": {
                "default": {
                 "url": "https://i.ytimg.com/vi/1wj21zLtgAA/default.jpg",
                 "width": 120,
                 "height": 90
                },
                "medium": {
                 "url": "https://i.ytimg.com/vi/1wj21zLtgAA/mqdefault.jpg",
                 "width": 320,
                 "height": 180
                },
                "high": {
                 "url": "https://i.ytimg.com/vi/1wj21zLtgAA/hqdefault.jpg",
                 "width": 480,
                 "height": 360
                },
                "standard": {
                 "url": "https://i.ytimg.com/vi/1wj21zLtgAA/sddefault.jpg",
                 "width": 640,
                 "height": 480
                },
                "maxres": {
                 "url": "https://i.ytimg.com/vi/1wj21zLtgAA/maxresdefault.jpg",
                 "width": 1280,
                 "height": 720
                }
               },
               "channelTitle": "League of Legends",
               "localized": {
                "title": "Legends of Bilgewater",
                "description": ""
               }
              },
              "contentDetails": {
               "itemCount": 6
              }
             },
             {
              "kind": "youtube#playlist",
              "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/VgwNA4mpYaF7VdeHm2gvzM40iOc\"",
              "id": "PLbAFXJC0J5GYP9ithYPBGC8bYWbvSk83C",
              "snippet": {
               "publishedAt": "2018-05-29T07:48:47.000Z",
               "channelId": "UC2t5bjwHdUX4vM2g8TRDq5g",
               "title": "2018 Champion Spotlights",
               "description": "",
               "thumbnails": {
                "default": {
                 "url": "https://i.ytimg.com/vi/g2mara8nFVE/default.jpg",
                 "width": 120,
                 "height": 90
                },
                "medium": {
                 "url": "https://i.ytimg.com/vi/g2mara8nFVE/mqdefault.jpg",
                 "width": 320,
                 "height": 180
                },
                "high": {
                 "url": "https://i.ytimg.com/vi/g2mara8nFVE/hqdefault.jpg",
                 "width": 480,
                 "height": 360
                },
                "standard": {
                 "url": "https://i.ytimg.com/vi/g2mara8nFVE/sddefault.jpg",
                 "width": 640,
                 "height": 480
                },
                "maxres": {
                 "url": "https://i.ytimg.com/vi/g2mara8nFVE/maxresdefault.jpg",
                 "width": 1280,
                 "height": 720
                }
               },
               "channelTitle": "League of Legends",
               "localized": {
                "title": "2018 Champion Spotlights",
                "description": ""
               }
              },
              "contentDetails": {
               "itemCount": 8
              }
             },
             {
              "kind": "youtube#playlist",
              "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/tctTWswBBhEMvV3KsmZpaKBkfN4\"",
              "id": "PLbAFXJC0J5GYUB3JsLqltenB6cvyCqTP4",
              "snippet": {
               "publishedAt": "2018-04-25T16:56:03.000Z",
               "channelId": "UC2t5bjwHdUX4vM2g8TRDq5g",
               "title": "What is League of Legends?",
               "description": "We asked the League of Legends Community to help us answer the question \"What is League of Legends?\"",
               "thumbnails": {
                "default": {
                 "url": "https://i.ytimg.com/vi/Gnsq2lseMk0/default.jpg",
                 "width": 120,
                 "height": 90
                },
                "medium": {
                 "url": "https://i.ytimg.com/vi/Gnsq2lseMk0/mqdefault.jpg",
                 "width": 320,
                 "height": 180
                },
                "high": {
                 "url": "https://i.ytimg.com/vi/Gnsq2lseMk0/hqdefault.jpg",
                 "width": 480,
                 "height": 360
                },
                "standard": {
                 "url": "https://i.ytimg.com/vi/Gnsq2lseMk0/sddefault.jpg",
                 "width": 640,
                 "height": 480
                },
                "maxres": {
                 "url": "https://i.ytimg.com/vi/Gnsq2lseMk0/maxresdefault.jpg",
                 "width": 1280,
                 "height": 720
                }
               },
               "channelTitle": "League of Legends",
               "localized": {
                "title": "What is League of Legends?",
                "description": "We asked the League of Legends Community to help us answer the question \"What is League of Legends?\""
               }
              },
              "contentDetails": {
               "itemCount": 6
              }
             },
             {
              "kind": "youtube#playlist",
              "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/NqtwI5XujSfDJZQDDqjKV-oMsMc\"",
              "id": "PLbAFXJC0J5GbNojXJ_Q4EM64YaWcNVxG6",
              "snippet": {
               "publishedAt": "2017-11-07T21:27:18.000Z",
               "channelId": "UC2t5bjwHdUX4vM2g8TRDq5g",
               "title": "Paths to Victory",
               "description": "",
               "thumbnails": {
                "default": {
                 "url": "https://i.ytimg.com/vi/-sMwUTAj0LQ/default.jpg",
                 "width": 120,
                 "height": 90
                },
                "medium": {
                 "url": "https://i.ytimg.com/vi/-sMwUTAj0LQ/mqdefault.jpg",
                 "width": 320,
                 "height": 180
                },
                "high": {
                 "url": "https://i.ytimg.com/vi/-sMwUTAj0LQ/hqdefault.jpg",
                 "width": 480,
                 "height": 360
                },
                "standard": {
                 "url": "https://i.ytimg.com/vi/-sMwUTAj0LQ/sddefault.jpg",
                 "width": 640,
                 "height": 480
                },
                "maxres": {
                 "url": "https://i.ytimg.com/vi/-sMwUTAj0LQ/maxresdefault.jpg",
                 "width": 1280,
                 "height": 720
                }
               },
               "channelTitle": "League of Legends",
               "localized": {
                "title": "Paths to Victory",
                "description": ""
               }
              },
              "contentDetails": {
               "itemCount": 5
              }
             },
             {
              "kind": "youtube#playlist",
              "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/2Ux3reuD-W21epWPyXXKBCnUYi0\"",
              "id": "PLbAFXJC0J5GbfFf6WIaTQ_7ECy92C43Sg",
              "snippet": {
               "publishedAt": "2017-09-15T20:43:38.000Z",
               "channelId": "UC2t5bjwHdUX4vM2g8TRDq5g",
               "title": "Worlds Anthems",
               "description": "",
               "thumbnails": {
                "default": {
                 "url": "https://i.ytimg.com/vi/fmI_Ndrxy14/default.jpg",
                 "width": 120,
                 "height": 90
                },
                "medium": {
                 "url": "https://i.ytimg.com/vi/fmI_Ndrxy14/mqdefault.jpg",
                 "width": 320,
                 "height": 180
                },
                "high": {
                 "url": "https://i.ytimg.com/vi/fmI_Ndrxy14/hqdefault.jpg",
                 "width": 480,
                 "height": 360
                },
                "standard": {
                 "url": "https://i.ytimg.com/vi/fmI_Ndrxy14/sddefault.jpg",
                 "width": 640,
                 "height": 480
                },
                "maxres": {
                 "url": "https://i.ytimg.com/vi/fmI_Ndrxy14/maxresdefault.jpg",
                 "width": 1280,
                 "height": 720
                }
               },
               "channelTitle": "League of Legends",
               "localized": {
                "title": "Worlds Anthems",
                "description": ""
               }
              },
              "contentDetails": {
               "itemCount": 6
              }
             },
             {
              "kind": "youtube#playlist",
              "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/d7yqB-JQtnRM5x6QmP1hCpoVdCs\"",
              "id": "PLbAFXJC0J5Gbogs-3Jk3nay0sAeAqi3SS",
              "snippet": {
               "publishedAt": "2017-08-09T20:27:44.000Z",
               "channelId": "UC2t5bjwHdUX4vM2g8TRDq5g",
               "title": "Music Videos",
               "description": "",
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
                },
                "standard": {
                 "url": "https://i.ytimg.com/vi/UOxkGD8qRB4/sddefault.jpg",
                 "width": 640,
                 "height": 480
                },
                "maxres": {
                 "url": "https://i.ytimg.com/vi/UOxkGD8qRB4/maxresdefault.jpg",
                 "width": 1280,
                 "height": 720
                }
               },
               "channelTitle": "League of Legends",
               "localized": {
                "title": "Music Videos",
                "description": ""
               }
              },
              "contentDetails": {
               "itemCount": 13
              }
             },
             {
              "kind": "youtube#playlist",
              "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/aU-eKV1rLyjlef9buOEptdy20e8\"",
              "id": "PLbAFXJC0J5GaHkc_-9cmRD_oTd--qUZRK",
              "snippet": {
               "publishedAt": "2017-07-21T18:05:29.000Z",
               "channelId": "UC2t5bjwHdUX4vM2g8TRDq5g",
               "title": "Pentakill - Grasp of the Undying",
               "description": "",
               "thumbnails": {
                "default": {
                 "url": "https://i.ytimg.com/vi/sOhFHWk4oXg/default.jpg",
                 "width": 120,
                 "height": 90
                },
                "medium": {
                 "url": "https://i.ytimg.com/vi/sOhFHWk4oXg/mqdefault.jpg",
                 "width": 320,
                 "height": 180
                },
                "high": {
                 "url": "https://i.ytimg.com/vi/sOhFHWk4oXg/hqdefault.jpg",
                 "width": 480,
                 "height": 360
                },
                "standard": {
                 "url": "https://i.ytimg.com/vi/sOhFHWk4oXg/sddefault.jpg",
                 "width": 640,
                 "height": 480
                },
                "maxres": {
                 "url": "https://i.ytimg.com/vi/sOhFHWk4oXg/maxresdefault.jpg",
                 "width": 1280,
                 "height": 720
                }
               },
               "channelTitle": "League of Legends",
               "localized": {
                "title": "Pentakill - Grasp of the Undying",
                "description": ""
               }
              },
              "contentDetails": {
               "itemCount": 10
              }
             },
             {
              "kind": "youtube#playlist",
              "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/EQ1a4oL-aAEijtljp3Afq8bHvSk\"",
              "id": "PLbAFXJC0J5GYT2tX25xantkJsF4PvIDgA",
              "snippet": {
               "publishedAt": "2017-07-06T20:51:21.000Z",
               "channelId": "UC2t5bjwHdUX4vM2g8TRDq5g",
               "title": "2017 Champion Spotlights",
               "description": "",
               "thumbnails": {
                "default": {
                 "url": "https://i.ytimg.com/vi/Rro20bR4jnQ/default.jpg",
                 "width": 120,
                 "height": 90
                },
                "medium": {
                 "url": "https://i.ytimg.com/vi/Rro20bR4jnQ/mqdefault.jpg",
                 "width": 320,
                 "height": 180
                },
                "high": {
                 "url": "https://i.ytimg.com/vi/Rro20bR4jnQ/hqdefault.jpg",
                 "width": 480,
                 "height": 360
                },
                "standard": {
                 "url": "https://i.ytimg.com/vi/Rro20bR4jnQ/sddefault.jpg",
                 "width": 640,
                 "height": 480
                },
                "maxres": {
                 "url": "https://i.ytimg.com/vi/Rro20bR4jnQ/maxresdefault.jpg",
                 "width": 1280,
                 "height": 720
                }
               },
               "channelTitle": "League of Legends",
               "localized": {
                "title": "2017 Champion Spotlights",
                "description": ""
               }
              },
              "contentDetails": {
               "itemCount": 6
              }
             },
             {
              "kind": "youtube#playlist",
              "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/evLD1XbrojqtecGBJDN9SkTp9BY\"",
              "id": "PLbAFXJC0J5GajAc20gAbuq3NJk5BGYY9u",
              "snippet": {
               "publishedAt": "2017-06-05T20:10:05.000Z",
               "channelId": "UC2t5bjwHdUX4vM2g8TRDq5g",
               "title": "/dev diaries",
               "description": "",
               "thumbnails": {
                "default": {
                 "url": "https://i.ytimg.com/vi/VMAAfm095tg/default.jpg",
                 "width": 120,
                 "height": 90
                },
                "medium": {
                 "url": "https://i.ytimg.com/vi/VMAAfm095tg/mqdefault.jpg",
                 "width": 320,
                 "height": 180
                },
                "high": {
                 "url": "https://i.ytimg.com/vi/VMAAfm095tg/hqdefault.jpg",
                 "width": 480,
                 "height": 360
                },
                "standard": {
                 "url": "https://i.ytimg.com/vi/VMAAfm095tg/sddefault.jpg",
                 "width": 640,
                 "height": 480
                },
                "maxres": {
                 "url": "https://i.ytimg.com/vi/VMAAfm095tg/maxresdefault.jpg",
                 "width": 1280,
                 "height": 720
                }
               },
               "channelTitle": "League of Legends",
               "localized": {
                "title": "/dev diaries",
                "description": ""
               }
              },
              "contentDetails": {
               "itemCount": 18
              }
             }
            ]
           }

           const playlistObservable = new Observable(observer => {
            observer.next(playlist);
        });

        return playlistObservable;
           
        // this._apiService.getChannelPlaylist(searchPredicate).toPromise().then((response) => {
        //     if (response) {
        //         this.setVideoList(response);
        //     }
        // });
    }
}
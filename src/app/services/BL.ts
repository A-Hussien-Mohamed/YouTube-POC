import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { ConfigService } from './DAL'
import { queryDef } from '@angular/core/src/view';
import { searchPridicate } from '../interfaces/interfaces';

@Injectable()
export class DataService {

    constructor(private _apiService: ConfigService) { }

    private videoListSource = new BehaviorSubject({});
    currentVideoList = this.videoListSource.asObservable();

    private videoSource = new BehaviorSubject({});
    currentVideo = this.videoSource.asObservable();


    setVideoList(videos: {}) {
        this.videoListSource.next(videos)
    }
    setCurrentVideo(video: {}) {
        this.videoSource.next(video);
    }

    search(searchPredicate: searchPridicate) {
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
        // this._apiService.search(searchPredicate).toPromise().then((response) => {
        //     if (response) {
        //         this.setVideoList(response);
        //     }
        // });
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
        return videoObject;
        //return this._apiService.getVideo(searchPredicate);
    }
    getRelatedVideo(searchPredicate: searchPridicate){
        this._apiService.getRelatedVideos(searchPredicate).toPromise().then((response) => {
            if (response) {
                this.setVideoList(response);
            }
        });
    }
}
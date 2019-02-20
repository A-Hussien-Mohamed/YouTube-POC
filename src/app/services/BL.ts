import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ConfigService } from './DAL'
import { searchPridicate } from '../interfaces/interfaces';
import { response } from '../interfaces/interfaces'

@Injectable()
export class DataService {

    constructor(private _apiService: ConfigService) { }

    private videoListSource = new BehaviorSubject(new response);
    currentVideoList = this.videoListSource.asObservable();

    private channelSource = new BehaviorSubject(new response);
    currentChannel = this.channelSource.asObservable();

    private videoSource = new BehaviorSubject(new response);
    currentVideo = this.videoSource.asObservable();

    private searchPredicat = new BehaviorSubject(new searchPridicate);
    currentPredicate = this.searchPredicat.asObservable();

    deleteCurrentVideoList() {
        this.setVideoList(new response);
    }

    setSearchPridicate(predicate: searchPridicate) {
        this.searchPredicat.next(predicate);
    }
    setVideoList(videosList: response) {
        this.videoListSource.next(videosList)
    }
    setCurrentVideo(video: response) {
        this.videoSource.next(video);
    }
    search(searchPredicate: searchPridicate) {
        this._apiService.search(searchPredicate).toPromise().then((response: response) => {
            if (response) {
                searchPredicate.nextPageToken = response.nextPageToken;
                this.setSearchPridicate(searchPredicate);
                this.setVideoList(response);
            }
        }).catch(error => {
            console.log(error.message);
        });
    }
    getVideo(searchPredicate: searchPridicate) {
        const video = new Observable(observer => {
            this._apiService.getVideo(searchPredicate).toPromise().then((response: response) => {
                if (response) {
                    observer.next(response);
                }
            }).catch(error => {
                console.log(error);
            });
        });
        return video;
    }
    setChannelDetails(channel: response) {
        this.channelSource.next(channel);
    }
    getChannelDetails(searchPredicate: searchPridicate) {
        this._apiService.getChannelDetails(searchPredicate).toPromise().then((response) => {
            if (response) {
                this.setChannelDetails(response);
            }
        }).catch(error => {
            console.log(error);
        });
    }

    getChannelPlaylist(searchPredicate: searchPridicate) {
        this._apiService.getChannelPlaylist(searchPredicate).toPromise().then((response) => {
            if (response) {
                this.setVideoList(response);
            }
        }).catch(error => {
            console.log(error);
        });
    }
}
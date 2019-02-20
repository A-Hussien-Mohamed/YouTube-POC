import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { searchPridicate, response } from '../interfaces/interfaces';

@Injectable()
export class ConfigService {
    apiKey: string = 'AIzaSyDBFVPkq50JdsF2b_bmmWL3rbX1H-eNQ0M'; // api call key 

    constructor(private _httpClient: HttpClient) { }

    search(searchPridicate: searchPridicate) { // to be enhanced
        let params = new HttpParams().set("part", "snippet").set("key", this.apiKey).set("maxResults", '10');
        params = searchPridicate.query ? params.set("q", searchPridicate.query) : params;
        params = searchPridicate.nextPageToken ? params.set("pageToken", searchPridicate.nextPageToken) : params;
        params = searchPridicate.type ? params.set("type", searchPridicate.type) : params;
        params = searchPridicate.order ? params.set("order", searchPridicate.order) : params;
        params = searchPridicate.relatedToVideoId ? params.set("relatedToVideoId", searchPridicate.relatedToVideoId) : params;
        params = searchPridicate.publishedAfter ? params.set("publishedAfter", searchPridicate.publishedAfter) : params;
        return this._httpClient.get<response>('https://www.googleapis.com/youtube/v3/search', { params });
    }

    getVideo(searchPridicate: searchPridicate) {// to be enhanced
        let params = new HttpParams().set("part", "snippet,contentDetails,statistics").set("key", this.apiKey);
        params = searchPridicate.id ? params.set("id", searchPridicate.id.toString()) : params;
        return this._httpClient.get<response>('https://www.googleapis.com/youtube/v3/videos', { params });
    }

    getRelatedVideos(searchPridicate: searchPridicate) {// to be enhanced
        let params = new HttpParams().set("part", "snippet").set("key", this.apiKey).set("maxResults", '10');
        params = searchPridicate.nextPageToken ? params.set("pageToken", searchPridicate.nextPageToken) : params;
        params = searchPridicate.type ? params.set("type", searchPridicate.type) : params;
        params = searchPridicate.relatedToVideoId ? params.set("relatedToVideoId", searchPridicate.relatedToVideoId) : params;
        return this._httpClient.get<response>('https://www.googleapis.com/youtube/v3/search', { params });
    }

    getChannelDetails(searchPridicate: searchPridicate) {
        let params = new HttpParams().set("part", "snippet,brandingSettings,statistics").set("key", this.apiKey).set("maxResults", '10');
        params = searchPridicate.id ? params.set("id", searchPridicate.id.toString()) : params;
        params = searchPridicate.nextPageToken ? params.set("pageToken", searchPridicate.nextPageToken) : params;
        params = searchPridicate.type ? params.set("type", searchPridicate.type) : params;
        return this._httpClient.get<response>('https://www.googleapis.com/youtube/v3/channels', { params });
    }

    getChannelPlaylist(searchPridicate: searchPridicate){
        let params = new HttpParams().set("part", "snippet,contentDetails").set("key", this.apiKey).set("maxResults", '10');
        params = searchPridicate.channelId ? params.set("channelId", searchPridicate.channelId.toString()) : params;
        params = searchPridicate.type ? params.set("type", 'video') : params;
        params = searchPridicate.nextPageToken ? params.set("pageToken", searchPridicate.nextPageToken) : params;
        return this._httpClient.get<response>('https://www.googleapis.com/youtube/v3/playlists', { params });
    }


}
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { searchPridicate , videos } from '../interfaces/interfaces';




@Injectable()
export class ConfigService {
    apiKey: string = 'AIzaSyCNMjB8VCXoM2TewT16cqYoRmFjdWYTIXo';

    constructor(private _httpClient: HttpClient) { }


    search(searchPridicate: searchPridicate) {
        let params = new HttpParams().set("part", "snippet").set("key", this.apiKey).set("maxResults", '10');
        
        params = searchPridicate.query ? params.set("q", searchPridicate.query) : params;
        params = searchPridicate.nextPageToken ? params.set("pageToken", searchPridicate.nextPageToken) : params;
        params = searchPridicate.type ? params.set("type", searchPridicate.type) : params;
        
        return this._httpClient.get<videos>('https://www.googleapis.com/youtube/v3/search', { params });
    }


}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, PreloadingStrategy } from '@angular/router';
import { DataService } from '../services/BL';
import { searchPridicate } from '../interfaces/interfaces';


@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.sass']
})
export class VideoDetailsComponent implements OnInit {
  predicate = new searchPridicate;
  _currentVideo = {};
  _relatedVideos = {};
  constructor(private _route: ActivatedRoute, private _dataService: DataService) {

  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      if (params['id']) {
        this.predicate.id = params['id'];
        this.predicate.relatedToVideoId = params['id'];
        this.predicate.type = 'video';
        this._dataService.getRelatedVideo(this.predicate);
        this._currentVideo = this._dataService.getVideo(this.predicate).items[0];
        this._dataService.currentVideoList.subscribe(relatedVideos => this._relatedVideos = relatedVideos);
      }
    });
  }

}

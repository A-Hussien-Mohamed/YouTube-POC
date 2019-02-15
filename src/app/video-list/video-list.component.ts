import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/BL'


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.sass']
})
export class VideoListComponent implements OnInit {
  videoList: Object = {};
  isMobileView = false;
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.currentVideoList.subscribe(currentVideoList => { this.videoList = currentVideoList;});
    if (window.screen.width === 360) { // 768px portrait
      this.isMobileView = true;
    }
  }

}

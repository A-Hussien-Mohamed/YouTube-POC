import { Component, OnInit, Input, HostListener } from '@angular/core';
import { DataService } from '../services/BL';
import { response, searchPridicate } from '../interfaces/interfaces';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.sass']
})
export class VideoListComponent implements OnInit {
  @Input() hideDisc: boolean = false;
  @Input() hideFilter: boolean = false;
  @Input() viewCount: Int32Array;


  predicate = new searchPridicate;
  videoList: response = new response;
  constructor(private _dataService: DataService) {
  }

  ngOnInit() {
    this._dataService.currentVideoList.subscribe(currentVideoList => {
      if (currentVideoList.items && this.videoList.items) {
        this.videoList.items = this.videoList.items.concat(currentVideoList.items);
      }
      else {
        this.videoList = currentVideoList;
      }
      this.predicate.nextPageToken = currentVideoList.nextPageToken;
    });
    this._dataService.currentPredicate.subscribe(currentPredicate => {
      this.predicate = currentPredicate;
    })
  }
  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this._dataService.search(this.predicate);
    }
  }




}

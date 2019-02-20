import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/BL';
import { searchPridicate, response } from '../interfaces/interfaces';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.sass']
})
export class VideoDetailsComponent implements OnInit {
  predicate = new searchPridicate;
  _currentVideo;
  _relatedVideos = {};
  _VideoURL = 'https://www.youtube.com/embed/';
  constructor(private _route: ActivatedRoute, private _dataService: DataService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      if (params['id']) {
        this.predicate.relatedToVideoId = params['id'];
        this.predicate.type = 'video';
        this._dataService.search(this.predicate);
        debugger;
        this.predicate.id = params['id'];
        this._dataService.getVideo(this.predicate).subscribe((response:response) => {this._currentVideo = response.items[0];});
        this._VideoURL = this._VideoURL + params['id'];
      }
    });
  }
  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
      this._dataService.search(this.predicate);
    }
  }
  transform() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this._VideoURL);
  }

}

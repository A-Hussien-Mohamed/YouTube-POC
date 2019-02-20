import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/BL';
import { ActivatedRoute } from '@angular/router';
import { searchPridicate, response } from '../interfaces/interfaces';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.sass']
})
export class ChannelComponent implements OnInit {
  predicate = new searchPridicate;
  constructor(private _dataService: DataService, private _route: ActivatedRoute) { }
  channel;
  isMobileView = false;

  ngOnInit() {
    this._route.params.subscribe(params => {
      if (params['id']) {
        this.predicate.id = params['id'];
        this._dataService.deleteCurrentVideoList();
        this._dataService.getChannelDetails(this.predicate);
        this.predicate.channelId = params['id'];
        this._dataService.getChannelPlaylist(this.predicate);
      }
    });
    this._dataService.currentChannel.subscribe((response: response) => {
      if (response && response.items) {
        this.channel = response.items[0];
      }
    });
    if (window.screen.width <= 400) { // 768px portrait
      this.isMobileView = true;
    }
  }
}

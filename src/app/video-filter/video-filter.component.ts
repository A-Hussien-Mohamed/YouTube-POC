import { Component, OnInit, Input } from '@angular/core';
import { searchPridicate } from '../interfaces/interfaces';
import { DataService } from '../services/BL';

const Date = {
  categ: 'UPLOAD DATE',
  predicateRef :'publishedDate',
  data: ["Last hour", "Today", "This Week", "This month"],
  selected: ''
}
const type = {
  categ: 'TYPE',
  predicateRef :'type',
  data: [{ name: "Video", value: 'video' }, { name: "Channel", value: 'channel' }, { name: "Playlist", value: "playlist" }],
  selected: ''
}
const order = {
  categ: 'SORT BY',
  predicateRef :'order',
  data: [{ name: "Relevance", value: 'relevance' }, { name: "upload Date", value: "date" }, { name: "view Count", value: 'viewCount' }, { name: "Rating", value: 'rating' }],
  selected: 'relevance'
}

@Component({
  selector: 'app-video-filter',
  templateUrl: './video-filter.component.html',
  styleUrls: ['./video-filter.component.sass']
})

export class VideoFilterComponent implements OnInit {
  @Input() videoListInfo: {};
  @Input() hideFilter: boolean;
  publishedDate = Date;
  type = type;
  order = order;

  pridecate: searchPridicate = new searchPridicate;
  constructor(private _dataService: DataService) {
  }

  ngOnInit() {
  }

  setDateFilter(selectedDate: string) {
    this.publishedDate.selected = selectedDate;
    switch (selectedDate) {
      case "Last hour":
        break;
      case "Today":
        break;
      case "This Week":
        break;
      case "This month":
        break;
    }
    //this.pridecate[item.key] = item.value;
  }

  setOrder(selectedOrder: string) {
    this.order.selected = selectedOrder;

  }

  setType(seelctedType: string) {
    this.type.selected = seelctedType;
    this.pridecate.type = seelctedType;
    this._dataService.search(this.pridecate);
  }

  deleteSelectedFilter(categ) {
    this.pridecate[categ.predicateRef] = '';
    categ.selected = '';
    this._dataService.search(this.pridecate);
  }


}

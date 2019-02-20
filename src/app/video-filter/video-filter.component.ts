import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { searchPridicate } from '../interfaces/interfaces';
import { DataService } from '../services/BL';

const DateFilter = {
  categ: 'UPLOAD DATE',
  predicateRef: 'publishedAfter',
  data: ["Last hour", "Today", "This Week", "This month"],
  selected: ''
}
const type = {
  categ: 'TYPE',
  predicateRef: 'type',
  data: [{ name: "Video", value: 'video' }, { name: "Channel", value: 'channel' }, { name: "Playlist", value: "playlist" }],
  selected: ''
}
const order = {
  categ: 'SORT BY',
  predicateRef: 'order',
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


  publishedDate = DateFilter;
  type = type;
  order = order;
  @ViewChild('collapseBtn') collapseBtn: ElementRef;

  predicate: searchPridicate = new searchPridicate;
  constructor(private _dataService: DataService) {
  }
 
  ngOnInit() {
    this.predicate.order = 'relevance';
    this._dataService.setSearchPridicate(this.predicate);
    this._dataService.currentPredicate.subscribe(currentPredicate => { this.predicate = currentPredicate;})
    
  }

  setDateFilter(selectedDate: string) {
    this.publishedDate.selected = selectedDate;
    let today = new Date();
    let filteredDate = null;
    switch (selectedDate) {
      case "Last hour":
        filteredDate = new Date(today.getTime() - (1000 * 60 * 60)).toISOString();
        break;
      case "Today":
        filteredDate = today.toISOString();
        break;
      case "This Week":
        filteredDate = new Date(today.getTime() - (1000 * 60 * 60 * 24 * 7)).toISOString();
        break;
      case "This month":
        filteredDate = new Date(today.getTime() - (1000 * 60 * 60 * 24 * 30)).toISOString();
        break;
    }
    this.predicate.publishedAfter = filteredDate;
    this._dataService.deleteCurrentVideoList();
    this._dataService.setSearchPridicate(this.predicate);
    this._dataService.search(this.predicate);
    this.collapseBtn.nativeElement.click();

  }

  setOrder(selectedOrder: string) {
    this.order.selected = selectedOrder;
    this.predicate.order = selectedOrder;
    this._dataService.setSearchPridicate(this.predicate);
    this._dataService.search(this.predicate);
    this.collapseBtn.nativeElement.click();

  }

  setType(seelctedType: string) {
    this.type.selected = seelctedType;
    this.predicate.type = seelctedType;
    this._dataService.deleteCurrentVideoList();
    this._dataService.setSearchPridicate(this.predicate);
    this._dataService.search(this.predicate);
    this.collapseBtn.nativeElement.click();
  }

  deleteSelectedFilter(categ) {
    this.predicate[categ.predicateRef] = '';
    categ.selected = '';    
    this._dataService.deleteCurrentVideoList();
    this._dataService.setSearchPridicate(this.predicate);
    this._dataService.search(this.predicate);
    this.collapseBtn.nativeElement.click();

  }


}

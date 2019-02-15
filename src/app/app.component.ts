import { Component } from '@angular/core';
import { DataService } from './services/BL'
import { _getViewData } from '@angular/core/src/render3/state';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { searchPridicate } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  searchQuery: string = '';
  predicate = new searchPridicate;
  constructor(private _dataService: DataService,
    private slimLoadingBarService: SlimLoadingBarService) {
      this.search('');
     }


  ngOnInit() {
  }

  search(searchQuery: string) {
    this.predicate.query = searchQuery;
    this._dataService.search(this.predicate);
  }
}

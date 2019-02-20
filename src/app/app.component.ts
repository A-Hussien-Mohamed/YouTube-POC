import { Component, HostListener } from '@angular/core';
import { DataService } from './services/BL'
import { _getViewData } from '@angular/core/src/render3/state';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { searchPridicate } from './interfaces/interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = "Instabug-YouTube"
  searchQuery: string = '';
  isMobileView = false;

  predicate = new searchPridicate;
  constructor(private _dataService: DataService,
    private slimLoadingBarService: SlimLoadingBarService, private router: Router) {
    this.search('');
  }


  ngOnInit() {
    this._dataService.currentPredicate.subscribe(currentPredicate => {
      this.predicate = currentPredicate;
    })
    if (window.screen.width <= 400) { // 768px portrait
      this.isMobileView = true;
    }
  }

  search(searchQuery: string) {
    this.predicate.query = searchQuery;
    this._dataService.deleteCurrentVideoList();
    this._dataService.setSearchPridicate(this.predicate);
    this._dataService.search(this.predicate);
    this.router.navigateByUrl('/video');
  }

  
}

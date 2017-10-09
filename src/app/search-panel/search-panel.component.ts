import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {

  public isValidFormSubmitted: boolean = null;
  public isLocationsEquals: boolean = null;
  public searchFrom = new FormGroup({
    fromSearch: new FormControl('', Validators.required, ),
    toSearch: new FormControl('', Validators.required),
    searchType: new FormControl('cheapest')
  });
  public cities: any[];

  constructor(private searchService: SearchService, private router: Router) {}

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.cities = this.searchService.getCities();
  }
  onFormSubmit() {
    this.isValidFormSubmitted = false;
    if (this.searchFrom.invalid) {
      return;
    }
    const resultParams = new ResultParams(
      this.searchFrom.get('fromSearch').value, this.searchFrom.get('toSearch').value, this.searchFrom.get('searchType').value);
    console.log(resultParams);
    // this is huck, need to add full validation
    if (resultParams.fromLocation === resultParams.toLocation) {
      this.isLocationsEquals = true;
      return;
    }
    this.isLocationsEquals = false;
    this.isValidFormSubmitted = true;
    this.router.navigate(['search-results'], { queryParams: resultParams });
  }
}

class ResultParams {
  fromLocation: string;
  toLocation: string;
  searchType: string;
  constructor (fromLocation: string, toLocation: string, searchType: string) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.searchType = searchType;
  }
}

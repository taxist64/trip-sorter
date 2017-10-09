import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {Router, ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  private resultParams;
  public searchResult;

  constructor(private searchService: SearchService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.resultParams = this.route.queryParams.subscribe(params => {
      const result = this.searchService.getResults();
      if (!result || !result.deals || result.deals.length === 0) {
        this.searchResult = false;
        return;
      }
      const resultArray: Array<object> = result.deals,
        resultFrom: string = params.fromLocation,
        resultTo: string = params.toLocation,
        sortBy: string = params.searchType === 'cheapest' ? 'price' : 'duration';
      let sortArray = [];

      formatResults(resultArray, resultFrom, false);
      function formatResults(correctArr: Array<any>, destFrom: string, currentObj: any) {
        if (correctArr.length === 0) {
          currentObj = {};
        } else {
          var objectFromParent = _.cloneDeep(currentObj);
          _.each(correctArr, function(deal) {
            if (!deal) {
              return;
            }
            let sortObj,
              notHaveSameDestinations = true;
            const newArr: Array<any> = _.cloneDeep(resultArray);
            sortObj = _.cloneDeep(objectFromParent) || {
              result: [],
              price: 0,
              priceWithoutDiscount: 0,
              duration: 0
            };
            _.each(sortObj.result, function(sortDeal: any) {
              if (deal.arrival === sortDeal.departure) {
                notHaveSameDestinations = false;
              }
            });
            if (deal.departure === destFrom && notHaveSameDestinations) {
              if (deal.discount) {
                deal.price = Number(deal.cost) * (1 - Number(deal.discount) / 100);
                sortObj.price += deal.price;
              } else {
                sortObj.price += Number(deal.cost);
              }
              sortObj.priceWithoutDiscount += Number(deal.cost);
              sortObj.duration += Number(deal.duration.h) * 60 + Number(deal.duration.m);
              sortObj.result.push(deal);
              if (deal.arrival !== resultTo) {
                formatResults(_.pull(newArr, deal), deal.arrival, sortObj);
              } else {
                sortArray.push(sortObj);
              }
            }
          });
        }
      }

      function formatTimeToString(duration: number) {
        const hours: string = Math.floor(duration / 60) ? Math.floor(duration / 60) + 'h' : '',
              minutes: string = duration % 60 ? duration % 60 + 'm' : '';
        return hours + minutes;
      }

      if (sortArray.length > 0) {
        sortArray = _.orderBy(sortArray, sortBy, 'asc');
        this.searchResult = sortArray[0];
        this.searchResult.stringDuration = formatTimeToString(this.searchResult.duration);
      } else {
        this.searchResult = false;
      }
    });
  }

  goToSearchPage() {
    this.router.navigate(['/']);
  }
}

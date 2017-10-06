import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

  constructor() { }

  public getCities() {
    return [
      {name: 'London'},
      {name: 'Amsterdam'},
      {name: 'Paris'},
      {name: 'Warsaw'},
      {name: 'Rome'},
      {name: 'Minsk'}
      ];
  }

  public getResults() {
    return {
      'currency': 'EUR',
      deals: [
      {
        'transport': 'train',
        departure: 'London',
        'arrival': 'Amsterdam',
        'duration': {
          'h': '05',
          'm': '00'
        },
        'cost': 160,
        'discount': 10,
        'reference': 'TLA0500'
      },
      {
        'transport': 'bus',
        departure: 'London',
        'arrival': 'Amsterdam',
        'duration': {
          'h': '07',
          'm': '45'
        },
        'cost': 40,
        'discount': 25,
        'reference': 'BLA0745'
      },
      {
        'transport': 'car',
        departure: 'London',
        'arrival': 'Amsterdam',
        'duration': {
          'h': '04',
          'm': '45'
        },
        'cost': 120,
        'discount': 0,
        'reference': 'CLA0445'
      },
      {
        'transport': 'train',
        departure: 'London',
        'arrival': 'Paris',
        'duration': {
          'h': '04',
          'm': '30'
        },
        'cost': 160,
        'discount': 0,
        'reference': 'TLP0430'
      },
      {
        'transport': 'bus',
        departure: 'Paris',
        'arrival': 'Warsaw',
        'duration': {
          'h': '05',
          'm': '30'
        },
        'cost': 40,
        'discount': 50,
        'reference': 'BLP0530'
      },
      {
        'transport': 'car',
        departure: 'Warsaw',
        'arrival': 'Amsterdam',
        'duration': {
          'h': '04',
          'm': '15'
        },
        'cost': 120,
        'discount': 0,
        'reference': 'CLP0415'
      },
      {
        'transport': 'car',
        departure: 'London',
        'arrival': 'Rome',
        'duration': {
          'h': '04',
          'm': '15'
        },
        'cost': 120,
        'discount': 20,
        'reference': 'CLP0415'
      },
      {
        'transport': 'car',
        departure: 'Rome',
        'arrival': 'Amsterdam',
        'duration': {
          'h': '0',
          'm': '55'
        },
        'cost': 120,
        'discount': 0,
        'reference': 'CLP0415'
      },
      {
        'transport': 'car',
        departure: 'London',
        'arrival': 'Minsk',
        'duration': {
          'h': '0',
          'm': '55'
        },
        'cost': 120,
        'discount': 0,
        'reference': 'CLP0415'
      },
      {
        'transport': 'car',
        departure: 'Minsk',
        'arrival': 'Paris',
        'duration': {
          'h': '0',
          'm': '55'
        },
        'cost': 120,
        'discount': 0,
        'reference': 'CLP0415'
      }
    ]
    };
  }

}

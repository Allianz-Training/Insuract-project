import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import { ProductsService } from '../_services/products.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  insurance: string;
  price: number;
  priceCurrency: string;

  displayInsurance: any;

  // tslint:disable-next-line: variable-name
  constructor(private _api: ProductsService) {
    this.insurance = 'Health';
    this.price = 1000;
    this.priceCurrency = '';
    this.displayInsurance = undefined;
  }

  ngOnInit(): void {
    $(window).on('scroll', () => {
      if ($(window).scrollTop()) {
        $('nav').addClass('black');
      } else {
        $('nav').removeClass('black');
      }
    });
  }

  formatLabel(value: number): any {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  selectCategory(c: string): void {
    this.insurance = c;
    this.updateResult();
  }

  updateResult(): void {
    // update price number to currency format
    this.priceCurrency = this.price
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');

    // get filter from backend
    const promise = this._api
      .filterMinInsurance(this.insurance, this.price)
      .toPromise();

    promise
      .then((data) => {
        this.displayInsurance = data;
        console.log(this.displayInsurance);
      })
      .catch((error) => {
        console.warn(error);
      });
  }
}

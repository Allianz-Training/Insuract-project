import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  insurance: string = '';
  price: number = 1000;

  constructor(private _api: ProductsService) {}

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
  }

  updateResult() {
    // const promise = this._api.
  }
}

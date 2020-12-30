import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Insurance {
  constructor(
    public company: string,
    public productName: string,
    public productType: string,
    public productRange: string,
    public ipd: number,
    public opd: number,
    public death: number,
    public room: number,
    public annualPayment: number,
    public trimesterPayment: number,
    public monthlyPayment: number,
    public retirementOnetime: number,
    public retirementMonthly: number,
    public id: string
  ) {}
}

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss'],
})
export class BrowserComponent implements OnInit {
  insurances: Insurance[];

  constructor(private httpClient: HttpClient) {
    this.insurances = [];
  }

  ngOnInit(): void {
    this.getInsurance();
  }

  getInsurance() {
    this.httpClient
      .get<any>('localhost:8080/product/')
      .subscribe((response) => {
        console.log(response);
        this.insurances = response;
      });
  }
}

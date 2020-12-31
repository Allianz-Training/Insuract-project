import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss'],
})
export class BrowserComponent implements OnInit {
  private gridApi: any;
  private gridColumnApi: any;
  public columnDefs: any;
  private sortingOrder: any;

  constructor(private service: ProductsService, private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: 'Type',
        field: 'productType',
        sortingOrder: ['asc', 'desc', null],
        sortable: true,
        filter: true,
      },
      {
        headerName: 'Company',
        field: 'company',
        sortingOrder: ['asc', 'desc'],
        sortable: true,
        filter: true,
      },
      {
        headerName: 'Package name',
        field: 'productName',
        sortingOrder: ['asc', 'desc'],
        sortable: true,
        filter: true,
      },
      {
        headerName: 'Monthly payment',
        field: 'monthlyPayment',
        sortable: true,
        filter: 'agNumberColumnFilter',
      },
      {
        headerName: 'Trimester payment',
        field: 'trimesterPayment',
        sortable: true,
        filter: 'agNumberColumnFilter',
      },
      {
        headerName: 'Annaul payment',
        field: 'annualPayment',
        sortable: true,
        filter: 'agNumberColumnFilter',
      },
      {
        headerName: 'IPD',
        field: 'ipd',
        sortable: true,
        filter: 'agNumberColumnFilter',
      },
      {
        headerName: 'OPD',
        field: 'opd',
        sortable: true,
        filter: 'agNumberColumnFilter',
      },
      {
        headerName: 'Death',
        field: 'death',
        sortable: true,
        filter: 'agNumberColumnFilter',
      },
      {
        headerName: 'Room coverage',
        field: 'room',
        sortable: true,
        filter: 'agNumberColumnFilter',
      },
      {
        headerName: 'Retirement (onetime)',
        field: 'retirementOneTime',
        sortable: true,
        filter: 'agNumberColumnFilter',
      },
      {
        headerName: 'Retirement (monthly)',
        field: 'retirementMonthly',
        sortable: true,
        filter: 'agNumberColumnFilter',
      },
    ];
    this.sortingOrder = ['desc', 'asc', null];
  }

  ngOnInit(): void {}

  onGridReady(params: any): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.http.get('http://localhost:8080/product/').subscribe((data) => {
      console.log(data);
      params.api.setRowData(data);
    });
  }

  
}

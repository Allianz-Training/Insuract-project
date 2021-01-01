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
  public sortingOrder: any;

  // tslint:disable-next-line: variable-name
  constructor(private _api: ProductsService) {
    this.columnDefs = [
      {
        headerName: '',
        field: 'id',
        width: 100,
        cellRenderer(params: { value: any }): any {
          return `<a href="/insurance/${params.value}" class="detailLink" >Detail</a>`;
        },
      },
      {
        headerName: 'Type',
        field: 'productType',
        width: 130,
        sortingOrder: ['asc', 'desc', null],
        sortable: true,
        filter: true,
      },
      {
        headerName: 'Company',
        field: 'company',
        width: 150,
        sortingOrder: ['asc', 'desc'],
        sortable: true,
        filter: true,
      },
      {
        headerName: 'Package name',
        field: 'productName',
        width: 200,
        sortingOrder: ['asc', 'desc'],
        sortable: true,
        filter: true,
      },
      {
        headerName: 'Monthly',
        field: 'monthlyPayment',
        width: 125,
        sortable: true,
        filter: 'agNumberColumnFilter',
      },
      {
        headerName: 'Trimester',
        field: 'trimesterPayment',
        width: 125,
        sortable: true,
        filter: 'agNumberColumnFilter',
      },
      {
        headerName: 'Annaul',
        field: 'annualPayment',
        width: 125,
        sortable: true,
        filter: 'agNumberColumnFilter',
      },
      {
        headerName: 'IPD',
        field: 'ipd',
        width: 125,
        sortable: true,
        filter: 'agNumberColumnFilter',
      },
      {
        headerName: 'OPD',
        field: 'opd',
        width: 125,
        sortable: true,
        filter: 'agNumberColumnFilter',
      },
      {
        headerName: 'Death',
        field: 'death',
        width: 125,
        sortable: true,
        filter: 'agNumberColumnFilter',
      },
      {
        headerName: 'Room coverage',
        field: 'room',
        width: 175,
        sortable: true,
        filter: 'agNumberColumnFilter',
      },
      {
        headerName: 'Retirement (onetime)',
        field: 'retirementOneTime',
        width: 190,
        sortable: true,
        filter: 'agNumberColumnFilter',
      },
      {
        headerName: 'Retirement (monthly)',
        field: 'retirementMonthly',
        width: 190,
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
    this._api.getInsurance().subscribe((data) => {
      console.log(data);
      params.api.setRowData(data);
    });
  }

  // var insuranceType = 'all';
  // isExternalFilterPresent(): boolean {
  //   return insuraceType !== 'all';
  // }

  // doesExternalFilterPass(node): any {
  //   switch (insuranceType) {
  //     case 'Health':
  //       return node.data.productType === 'Health';
  //     case 'Retirement':
  //       return node.data.productType === 'Retirement';
  //     default:
  //       return true;
  //   }
  // }

  // changeType(newValue: string): void {
  //   insuranceType = newValue;
  //   this.gridApi.onFilterChanged();
  // }
}

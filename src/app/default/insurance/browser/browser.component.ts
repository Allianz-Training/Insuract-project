import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Insurance } from 'src/app/Insurance';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss'],
})
export class BrowserComponent implements OnInit {
  ELEMENT_DATA: Insurance[];
  displayedColumns: string[] = [
    'productType',
    'company',
    'productName',
    'monthlyPayment',
    'trimesterPayment',
    'annualPayment',
    'ipd',
    'opd',
    'death',
    'room',
    'retirementMonthly',
    'retirementOneTime',
  ];
  dataSource = new MatTableDataSource<Insurance>(this.ELEMENT_DATA);

  constructor(private service: ProductsService) {
    this.ELEMENT_DATA = [];
  }

  ngOnInit(): void {
    this.getAllInsurance();
  }

  public getAllInsurance(): any {
    let response = this.service.getInsurance();
    response.subscribe((insurance) => {
      this.dataSource.data = insurance as Insurance[];
    });
  }
}

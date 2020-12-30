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
  ELEMENT_DATA?: Insurance[];
  displayedColumns: string[] = [
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
    'action',
  ];
  dataSource: any;

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getAllInsurance();
    this.dataSource = new MatTableDataSource<Insurance>(this.ELEMENT_DATA);
  }

  public getAllInsurance(): any {
    const response = this.service.getInsurance();
    response.subscribe((insurance) => {
      this.dataSource.data = insurance as Insurance[];
    });
  }
}

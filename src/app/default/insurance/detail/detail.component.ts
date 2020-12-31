import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Insurance } from 'src/app/Insurance';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  insurance: any;

  constructor(
    private insuranceApi: ProductsService,
    private route: ActivatedRoute
  ) {
    this.insurance = [];
  }

  ngOnInit(): void {
    this.loadInsurance();
  }

  loadInsurance(): void {
    // tslint:disable-next-line: no-non-null-assertion
    const insuranceId = +this.route.snapshot.paramMap.get('id')!;
    this.insuranceApi.getInsuranceById(insuranceId).subscribe((data) => {
      this.insurance = data;
      console.log(this.insurance);
    });
    console.warn(`recieved params id '${insuranceId}' from ActivatedRoute`);
  }
}

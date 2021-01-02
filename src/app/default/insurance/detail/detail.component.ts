import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Insurance } from 'src/app/Insurance';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  insurance: any;

  // tslint:disable-next-line: variable-name
  constructor(
    private _api: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.insurance = [];
  }

  ngOnInit(): void {
    this.loadInsurance();
  }

  gotoReserve(): void {
    this.router.navigate([`reservation/${this.insurance.id}`]);
  }

  loadInsurance(): void {
    // tslint:disable-next-line: no-non-null-assertion
    const insuranceId = +this.route.snapshot.paramMap.get('id')!;
    const promise = this._api.getInsuranceById(insuranceId).toPromise();

    promise
      .then((data) => {
        this.insurance = data;
        console.warn(`recieved params id '${insuranceId}' from ActivatedRoute`);
      })
      .catch((error) => {
        console.warn(error.status);
        this.router.navigate(['error']);
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  insurance: any;
  selectPayment = 'monthly';

  date: any;

  constructor(
    private fb: FormBuilder,
    // tslint:disable-next-line: variable-name
    private _api: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadInsurance();
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

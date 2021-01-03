import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Insurance } from 'src/app/_interfaces/Insurance';
import { ProductsService } from 'src/app/_services/products.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  insurance: any;

  isUser: any;

  // tslint:disable-next-line: variable-name
  constructor(
    // tslint:disable-next-line: variable-name
    private _api: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private token: TokenStorageService
  ) {
    this.insurance = [];
    this.isUser = '';
  }

  ngOnInit(): void {
    this.loadInsurance();
  }

  gotoReserve(): void {
    if (this.token.getToken()) {
      this.router.navigate([`reservation/${this.insurance.id}`]);
    } else {
      this.router.navigate(['login']);
    }
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

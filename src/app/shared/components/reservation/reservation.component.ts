import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/_services/products.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  insurance: any;
  selectPayment = 'monthly';

  date: any;

  tokenUser: any;
  userInfo: any;

  constructor(
    private fb: FormBuilder,
    // tslint:disable-next-line: variable-name
    private _api: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    // tslint:disable-next-line: variable-name
    private _user: UserService,
    private token: TokenStorageService
  ) {
    this.insurance = '';
    this.userInfo = '';
  }

  ngOnInit(): void {
    this.loadInsurance();

    if (this.token.getToken()) {
      this.tokenUser = this.token.getUser();
      this.loadUserInfo();
    } else {
      this.router.navigate(['404']);
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

  loadUserInfo(): void {
    const userId = this.tokenUser.username;
    const promise = this._user.getUser(userId).toPromise();

    promise
      .then((data) => {
        this.userInfo = data;
        console.warn('get userWithUsername');
        console.log(this.userInfo);
      })
      .catch((error) => {
        console.warn(error.status);
      });
  }
}

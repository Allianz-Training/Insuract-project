import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  userInfo: any;


  constructor(
    private token: TokenStorageService,
    private _user: UserService,
    private router: Router
  ) {
    this.currentUser = '';
    this.userInfo = '';
  }

  ngOnInit(): void {
    if (this.token.getToken()) {
      this.currentUser = this.token.getUser();
      const promise = this._user.getUser(this.currentUser.username).toPromise();

      promise
        .then((data) => {
          this.userInfo = data;
        })
        .catch((error) => {
          console.warn(error);
        });
    } else {
      this.router.navigate(['404']);
    }
  }
}

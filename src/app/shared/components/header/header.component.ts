import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isUser: any;

  constructor(private token: TokenStorageService) {
    this.isUser = '';
  }

  ngOnInit(): void {
    if (this.token.getToken()) {
      this.isUser = this.token.getUser();
    }
  }

  logout(): void {
    this.token.signOut();
    window.location.reload();
  }
}

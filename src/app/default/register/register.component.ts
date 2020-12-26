import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  accountForm: FormGroup;
  personalForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.accountForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required]],
    });

    this.personalForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      citizenID: [
        '',
        [
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(13),
        ],
      ],
      telnum: ['', Validators.required],
      telnum2: [''],
      usertype: ['customer', Validators.required],
      agentRef: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  // should have password confirmation
}

import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';

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
      // custom validator for citizenID should contain only number
      citizenID: [
        '',
        [
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(13),
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        ],
      ],
      telnum: [
        '',
        [
          Validators.required,
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      telnum2: [
        '',
        [
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  submitforms(): void {
    console.warn(this.accountForm.value);
    console.warn(this.personalForm.value);
  }
}

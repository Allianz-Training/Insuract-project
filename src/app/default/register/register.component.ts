import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  accountForm: FormGroup;
  personalForm: FormGroup;

  userAvailable:boolean | undefined;
  emailAvailable:boolean | undefined;
  citizenIdAvailable:boolean | undefined;

  constructor(private fb: FormBuilder, private service: UsersService) {
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

  ngOnInit(): void { 
  }



  public async validateUser() {
    await this.service.validateUser(this.accountForm.get('username')?.value).then(
      response => {
        console.log(response.status)
        if(response.ok){
          console.log("OK")
          this.userAvailable = true
        }
      }
    ).catch( err => {
      console.error("Dup",err)
      this.userAvailable = false;
    })
    console.log(this.userAvailable)
  }

  public async validateEmail() {
    await this.service.validateEmail(this.accountForm.get('email')?.value).then(
      response => {
        console.log(response.status)
        if(response.ok){
          console.log("OK")
          this.emailAvailable = true
        }
      }
    ).catch( err => {
      console.error("Dup",err)
      this.emailAvailable = false;
    })
    console.log(this.emailAvailable)
  }

  public async validateCitizenId() {
    await this.service.validateCitizenId(this.personalForm.get('citizenID')?.value).then(
      response => {
        console.log(response.status)
        if(response.ok){
          console.log("OK")
          this.citizenIdAvailable = true
        }
      }
    ).catch( err => {
      console.error("Dup",err)
      this.citizenIdAvailable = false;
    })
    console.log(this.citizenIdAvailable)
  }

  submitforms(): void {
    console.warn(this.accountForm.value);
    console.warn(this.personalForm.value);
  }
}

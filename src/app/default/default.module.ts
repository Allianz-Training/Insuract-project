import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultComponent } from './default.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { InsuranceComponent } from './insurance/insurance.component';
import { BrowserComponent } from './insurance/browser/browser.component';
import { DetailComponent } from './insurance/detail/detail.component';

@NgModule({
  declarations: [DefaultComponent, LoginComponent, RegisterComponent, InsuranceComponent, BrowserComponent, DetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
  ],
  exports: [DefaultComponent],
})
export class DefaultModule {}

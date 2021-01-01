import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { BrowserComponent } from './default/insurance/browser/browser.component';
import { DetailComponent } from './default/insurance/detail/detail.component';
import { InsuranceComponent } from './default/insurance/insurance.component';
import { LoginComponent } from './default/login/login.component';
import { RegisterComponent } from './default/register/register.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: DefaultComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'insurance',
    component: InsuranceComponent,
    children: [
      {
        path: '',
        component: BrowserComponent,
      },
      {
        path: ':id',
        component: DetailComponent,
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

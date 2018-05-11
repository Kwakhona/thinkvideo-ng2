import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MDBChartsModule} from 'angular-bootstrap-md/charts/chart.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MDBChartsModule,
  ],
  declarations: [LoginComponent, DashboardComponent],
  exports: [LoginComponent, DashboardComponent]
})
export class ComponentsModule {
}

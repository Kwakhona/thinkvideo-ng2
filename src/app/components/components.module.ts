import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MDBChartsModule} from 'angular-bootstrap-md/charts/chart.module';
import {RouterModule} from '@angular/router';
import {ClientDetailsComponent} from './client-component/client-details/client-details.component';
import {ClientEditComponent} from './client-component/client-edit/client-edit.component';
import {UserService} from '../providers/user.service';
import {ClientOverviewComponent} from './client-component/client-overview/client-overview.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MDBChartsModule,
    RouterModule
  ],
  declarations: [
    LoginComponent,
    DashboardComponent,
    ClientDetailsComponent,
    ClientEditComponent,
    ClientOverviewComponent,
  ],
  exports: [LoginComponent, DashboardComponent],
  providers: [UserService]
})
export class ComponentsModule {
}

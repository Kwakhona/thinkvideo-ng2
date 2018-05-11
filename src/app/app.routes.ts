import {Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ClientDetailsComponent} from './components/client-component/client-details/client-details.component';
import {ClientEditComponent} from './components/client-component/client-edit/client-edit.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {
    path: 'clients/:clientId', component: ClientDetailsComponent, children: [
      {path: 'edit', component: ClientEditComponent}
    ]
  },
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

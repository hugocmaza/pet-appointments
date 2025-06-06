import { Routes } from '@angular/router';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

export const routes: Routes = [

 { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: AppointmentListComponent },
  { path: 'create', component: AppointmentFormComponent },
  { path: 'edit/:id', component: AppointmentFormComponent }
];

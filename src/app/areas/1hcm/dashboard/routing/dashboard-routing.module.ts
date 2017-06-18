import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';

import { DashboardRoutes } from './dashboard-routes';

@NgModule({
  imports: [ RouterModule.forChild(DashboardRoutes)],
  exports: [ RouterModule ]
})
export class DashboardRoutingModule { }
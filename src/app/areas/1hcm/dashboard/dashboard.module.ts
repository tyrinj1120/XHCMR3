import { NgModule }      from '@angular/core';

import { DashboardRoutingModule } from './routing/dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [ DashboardRoutingModule],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { 
  constructor() { }
}

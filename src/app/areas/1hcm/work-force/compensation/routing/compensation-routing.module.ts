import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';

import { CompensationRoutes } from './compensation-routes';

@NgModule({
  imports: [ RouterModule.forChild(CompensationRoutes)],
  exports: [ RouterModule ]
})
export class CompensationRoutingModule { }
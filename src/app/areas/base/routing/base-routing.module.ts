import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';

import { BaseRoutes } from './base-routes';

@NgModule({
  imports: [ RouterModule.forChild(BaseRoutes)],
  exports: [ RouterModule ]
})
export class BaseRoutingModule { }
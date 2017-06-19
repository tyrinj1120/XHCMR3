import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router }   from '@angular/router';

import { CompensationRoutingModule } from './routing/compensation-routing.module';

import { CompensationHomeComponent } from './1home/compensation-home.component';
import { ApplyForLoanComponent } from './loans/apply-for-loan/apply-for-loan.component';
import { LoanApplicationsComponent } from './loans/loan-applications/loan-applications.component';

@NgModule({
  imports: [ CompensationRoutingModule, CommonModule],
  declarations: [ CompensationHomeComponent, ApplyForLoanComponent, LoanApplicationsComponent ]
})
export class CompensationModule { 
  constructor(router: Router) {
    //console.log('Compensation Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}




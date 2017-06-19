import { Routes } from "@angular/router";

import { RouteGuard } from "../../../../../shared/general-shared-module/security/route-guard.service";

import { CompensationHomeComponent } from './../1home/compensation-home.component';

import { ApplyForLoanComponent } from './../loans/apply-for-loan/apply-for-loan.component';
import { LoanApplicationsComponent } from './../loans/loan-applications/loan-applications.component';

export const CompensationRoutes: Routes = [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: CompensationHomeComponent, canActivate: [RouteGuard] },
        { path: 'loans', children: [
                { path: '', redirectTo: 'applications', pathMatch: 'full' },
                { path: 'apply', component: ApplyForLoanComponent, canActivate: [RouteGuard], data: { title: 'Apply for Loan' } },
                { path: 'applications', component: LoanApplicationsComponent, canActivate: [RouteGuard], data: { title: 'Loan Applications' } }]
        }
    ];
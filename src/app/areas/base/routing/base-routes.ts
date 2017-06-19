import { Routes } from "@angular/router";

import { BaseComponent } from '../base.component';
import { DashboardComponent } from '../../../areas/1hcm/dashboard/dashboard.component';

import {RouteGuard} from "../../../shared/general-shared-module/security/route-guard.service";

export const BaseRoutes: Routes = [
    {
        path: '',
        component: BaseComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent, canActivate: [RouteGuard], data: { title: 'Dashboard' } },
            { path: 'compensation', loadChildren: '../../../areas/1hcm/work-force/compensation/compensation.module#CompensationModule' }
        ]
    }
];

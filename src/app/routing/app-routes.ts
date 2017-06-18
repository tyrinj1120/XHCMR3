import {ModuleWithProviders} from "@angular/core";
import { Routes } from "@angular/router";

import { HomeComponent } from "../areas/home/home.component";
import { SignupComponent } from "../areas/signup/signup.component";
import { AuthorizationComponent } from "../areas/authorization/authorization.component";

export const AppRoutes: Routes = [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'authorization', component: AuthorizationComponent },
        { path: 'signup', component: SignupComponent },
        { path: '**', redirectTo: 'home' }
    ];
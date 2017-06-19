import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';

/* Constants */
import { REQUEST_OPTIONS_PROVIDER } from "./core/services/default-request-options.service";

/* Feature Modules */
// import { BaseModule } from './../base/base.module';
import { DashboardModule } from './areas/1hcm/dashboard/dashboard.module';

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent }  from './areas/home/home.component';
import { AuthorizationComponent } from "./areas/authorization/authorization.component";
import { SignupComponent }  from './areas/signup/signup.component';

/* Core modules */
import { CoreModule } from './../app/core/core.module';

/* Shared modules */
import { SecurityModule } from "./shared/security-shared-module/security.module";

/* Standard Modules */
import { AppRoutingModule } from './routing/app-routing.module';
import { BaseModule } from "./areas/base/base.module";

/* Third-party services */
import { AdalService } from 'ng2-adal/core';
import { Observable } from 'rxjs/Observable';
import { LocalStorageModule } from 'angular-2-local-storage';

/* Services */
import { CoreService } from './core/services/core.service';
import { RouteGuard } from "./shared/general-shared-module/security/route-guard.service";
import { DefaultRequestOptions } from "./core/services/default-request-options.service";


@NgModule({
  declarations: [ AppComponent, HomeComponent, AuthorizationComponent, SignupComponent ],
  imports: [ BrowserModule, BrowserAnimationsModule, HttpModule, LocalStorageModule.withConfig({ prefix: 'x365-hcm-r3', storageType: 'localStorage' }), CoreModule, SecurityModule, DashboardModule, BaseModule, AppRoutingModule],
  providers: [REQUEST_OPTIONS_PROVIDER, AdalService, DefaultRequestOptions, DefaultRequestOptions, CoreService, RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) {
    // Diagnostic only: inspect router configuration
    //console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

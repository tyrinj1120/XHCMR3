import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { AdalService } from 'ng2-adal/core';
import { LocalStorageService } from 'angular-2-local-storage';

/* Services */
import { CoreDataService } from "../../core/services/core-data.service";
import { AuthService } from "../../shared/security-shared-module/services/auth.service";

/* Constants */
import { AppConstants } from "../../constants/app.constants";
import { DefaultRequestOptions } from "../../core/services/default-request-options.service";

@Component({
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {
  constructor(private coreDataService: CoreDataService, private authService: AuthService, private localStore: LocalStorageService, private defaultRequestOptions: DefaultRequestOptions, private router: Router, private adalService: AdalService) {
    if (this.adalService.userInfo.isAuthenticated) {
      let clientId: string = coreDataService.getSigninCordinates().clientId;
      let token: string = adalService.getCachedToken(clientId);
      
      // To delete ------------------
      //localStore.set(AppConstants.ACCESS_TOKEN, token);
      //this.router.navigate(['/dashboard']); 
      //-----------------------------


      this.authService.verifyUserToken(token)
        .subscribe(
          response => {
            localStore.set(AppConstants.ACCESS_TOKEN, token);

            // Build current user profile object and save in CoreDataService

            // Set App Edition i.e "HCM Enterprise" 

            this.router.navigate(['/dashboard']); 
          },
          error => {
            console.log('Error: ' + error);
            this.router.navigate(['/home']); 
          }
        )



    }else{
      this.router.navigate(['/home']); 
    }
  }
}
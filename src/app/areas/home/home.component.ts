import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import {AdalService} from 'ng2-adal/core';

// import { WellknownURIs } from '../../constants/wellknown-uris.constants';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public model = 'Home Page';

  constructor(private adalService: AdalService, private router: Router) { 
    if (this.adalService.userInfo.isAuthenticated) {
      this.router.navigate(['/authorization']); 
    }
  }

  public signIn() {
    this.adalService.login();
  }
}
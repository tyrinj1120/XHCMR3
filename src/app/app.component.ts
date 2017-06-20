import { Component, OnInit } from '@angular/core';

import { AdalService } from "ng2-adal/services/adal.service";
import { Router } from "@angular/router";

/* Services */
import { CoreService } from './core/services/core.service';
import { CoreDataService } from "./core/services/core-data.service";

/* Models */
import { AppConfigData } from './models/system/app-config/app-config.data';
import { AppData } from './models/system/app-data/app.data';
// import { AppStructureMap } from "./shared/general-shared-module/maps/app-structure.map";

// import { WellknownURIs } from './constants/wellknown-uris.constants'
import { EnvSettingsData } from "app/models/system/env-settings/env-settings.data";
import { AppStructureMap } from "app/struct-map/app-structure.map";

@Component({
  selector: 'x365-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private coreDataService: CoreDataService, private adalService: AdalService, private router: Router) {     
      this.coreDataService.setAppData(this.getAppData(this.coreDataService.getEnvironmentData()));
      this.adalService.init(this.coreDataService.getSigninCordinates());
   }

  ngOnInit(): void {
      this.adalService.handleWindowCallback();
      this.adalService.getUser();
  }

  private getAppData(value: EnvSettingsData): AppData {
    if (value != null) {
      let appData: AppData =  new AppData(value.name, 'HCM Enterprise', '', './../../../assets/images/x365-icon.png', '');

      console.log(AppStructureMap.getMap());
      appData.appModuleData = AppStructureMap.getMap();

      return appData;
    }
  }
}

import { NgModule } from '@angular/core';

import { CoreModule } from "../../core/core.module";
import { ServiceUrlsAuth, ServiceUrlsEmployee } from "./services/service-urls.service";

@NgModule({
  imports: [ CoreModule ],
  providers: [ ServiceUrlsAuth, ServiceUrlsEmployee ]
})
export class GeneralModule { 
  constructor() {  }
}
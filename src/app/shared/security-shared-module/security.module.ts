import { NgModule }      from '@angular/core';

import { CoreModule } from "../../core/core.module";

/* Standard modules */
import { GeneralModule } from "../general-shared-module/general.module";

/* Services */
import { AuthService } from "./services/auth.service";


@NgModule({
  imports: [ CoreModule, GeneralModule ],
  providers: [ AuthService]
})
export class SecurityModule { 
  constructor() {  }
}
import { NgModule }      from '@angular/core';

import { CoreService } from './services/core.service';
import { CoreDataService } from "./services/core-data.service";

@NgModule({
  imports: [ ],
  declarations: [ ],
  providers: [CoreService, CoreDataService],
  exports: []
})
export class CoreModule { 
  constructor() { }
}
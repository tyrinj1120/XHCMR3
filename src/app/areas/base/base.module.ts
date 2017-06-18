import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './routing/base-routing.module';

import { BaseComponent } from './base.component';
import { SlimScrollModule } from 'ng2-slimscroll';

@NgModule({
  imports: [ BaseRoutingModule, CommonModule, SlimScrollModule],
  declarations: [ BaseComponent ]
})
export class BaseModule { 
  constructor() {
    
  }
}




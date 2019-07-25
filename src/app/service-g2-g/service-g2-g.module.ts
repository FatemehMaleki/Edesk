import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceG2GRoutingModule } from './service-g2-g-routing.module';
import { KhadamatG2GComponent } from './khadamat-g2-g/khadamat-g2-g.component';
import {Index2Component} from '../layoutService/index/index2.component';
import {LayoutModule} from '../layoutService/layout.module';

@NgModule({
  declarations: [KhadamatG2GComponent],
  imports: [
    CommonModule,
    ServiceG2GRoutingModule,
      LayoutModule
  ],
  exports:[KhadamatG2GComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ServiceG2GModule { }

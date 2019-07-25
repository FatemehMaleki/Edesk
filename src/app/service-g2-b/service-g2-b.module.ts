import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceG2BRoutingModule } from './service-g2-b-routing.module';
import { KhadamatG2BComponent } from './khadamat-g2-b/khadamat-g2-b.component';
import {RouterModule} from '@angular/router';
import {LayoutModule} from '../layoutService/layout.module';




@NgModule({
  declarations: [KhadamatG2BComponent],
  imports: [
    CommonModule,
    RouterModule,
    ServiceG2BRoutingModule,
    LayoutModule,

  ],
  exports:[KhadamatG2BComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ServiceG2BModule { }

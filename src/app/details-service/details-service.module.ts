import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsServiceRoutingModule } from './details-service-routing.module';
import { DetailsComponent } from './details/details.component';
import {LayoutModule} from '../layoutService/layout.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    DetailsServiceRoutingModule,
      LayoutModule
  ],
  exports:[DetailsComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DetailsServiceModule { }

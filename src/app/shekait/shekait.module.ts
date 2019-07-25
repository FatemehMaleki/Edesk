import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShekaitRoutingModule } from './shekait-routing.module';
import { ServiceShekaitComponent } from './service-shekait/service-shekait.component';
import {Index2Component} from '../layoutService/index/index2.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from '../shared/shared.module';
import {LayoutModule} from '../layoutService/layout.module';

@NgModule({
  declarations: [ServiceShekaitComponent],
  imports: [
    CommonModule,
    ShekaitRoutingModule,
      FormsModule,
      SharedModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
  exports:[ServiceShekaitComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ShekaitModule { }

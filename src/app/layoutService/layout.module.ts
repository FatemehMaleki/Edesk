
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';

import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {Index2Component} from './index/index2.component';
import {TopMenuComponent} from '../top-menu/top-menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [Index2Component],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    SharedModule,
        ReactiveFormsModule,

  ],
  exports:[Index2Component],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class LayoutModule { }

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { NazarsanjiRoutingModule } from './nazarsanji-routing.module';
import { ServiceNazarsanjiComponent } from './service-nazarsanji/service-nazarsanji.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {LayoutModule} from '../layoutService/layout.module';

@NgModule({
  declarations: [ServiceNazarsanjiComponent],
  imports: [
    CommonModule,
    NazarsanjiRoutingModule,
    FormsModule,
    SharedModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
  exports:[ServiceNazarsanjiComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class NazarsanjiModule { }

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DarkhastRoutingModule } from './darkhast-routing.module';
import { ServiceDarkhastComponent } from './service-darkhast/service-darkhast.component';
import {LayoutModule} from '../layoutService/layout.module';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ServiceDarkhastComponent],
  imports: [
    CommonModule,
    DarkhastRoutingModule,
    FormsModule,
    SharedModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
  exports:[ServiceDarkhastComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DarkhastModule { }

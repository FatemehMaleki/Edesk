import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaghirdarkhastRoutingModule } from './taghirdarkhast-routing.module';
import { TaghirServiceComponent } from './taghir-service/taghir-service.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {LayoutModule} from '../layoutService/layout.module';

@NgModule({
  declarations: [TaghirServiceComponent],
  imports: [
    CommonModule,
    TaghirdarkhastRoutingModule,
    FormsModule,
    SharedModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
  exports:[TaghirServiceComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class TaghirdarkhastModule { }

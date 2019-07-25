import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoshahedehDarkhastRoutingModule } from './moshahedeh-darkhast-routing.module';
import { MoshahedehDarkhastServiceComponent } from './moshahedeh-darkhast-service/moshahedeh-darkhast-service.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {LayoutModule} from '../layoutService/layout.module';

@NgModule({
  declarations: [MoshahedehDarkhastServiceComponent],
  imports: [
    CommonModule,
    MoshahedehDarkhastRoutingModule,
    FormsModule,
    SharedModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
  exports:[MoshahedehDarkhastServiceComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class MoshahedehDarkhastModule { }

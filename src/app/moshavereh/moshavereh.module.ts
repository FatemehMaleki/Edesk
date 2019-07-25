import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoshaverehRoutingModule } from './moshavereh-routing.module';
import { MoshaverehServiceComponent } from './moshavereh-service/moshavereh-service.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {LayoutModule} from '../layoutService/layout.module';

@NgModule({
  declarations: [MoshaverehServiceComponent],
  imports: [
    CommonModule,
    MoshaverehRoutingModule,
    FormsModule,
    SharedModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
  exports:[MoshaverehServiceComponent]
})
export class MoshaverehModule { }

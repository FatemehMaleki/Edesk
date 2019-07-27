import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotfoundpageRoutingModule } from './notfoundpage-routing.module';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';


@NgModule({
  declarations: [NotfoundcomponentComponent],
  imports: [
    CommonModule,
    NotfoundpageRoutingModule
  ]
})
export class NotfoundpageModule { }

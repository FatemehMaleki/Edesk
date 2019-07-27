import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorserverRoutingModule } from './errorserver-routing.module';
import { ErrorwebserviceComponent } from './errorwebservice/errorwebservice.component';


@NgModule({
  declarations: [ErrorwebserviceComponent],
  imports: [
    CommonModule,
    ErrorserverRoutingModule
  ]
})
export class ErrorserverModule { }

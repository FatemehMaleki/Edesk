import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatrialModule} from './matrial.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatrialModule
  ],
  exports:[MatrialModule]
})
export class SharedModule { }

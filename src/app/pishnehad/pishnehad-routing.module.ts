import { PishnehadBehbodComponent } from './pishnehad-behbod/pishnehad-behbod.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Index2Component} from '../layoutService/index/index2.component';

const routes: Routes = [
  {path:'',component:Index2Component,children:[{
    path:'',component:PishnehadBehbodComponent
    }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PishnehadRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Index2Component} from '../layoutService/index/index2.component';
import {MoshaverehServiceComponent} from './moshavereh-service/moshavereh-service.component';

const routes: Routes = [
  {path:'',component:Index2Component,children:[{
      path:'',component:MoshaverehServiceComponent
    }]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoshaverehRoutingModule { }

import { KhadamatG2GComponent } from './khadamat-g2-g/khadamat-g2-g.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Index2Component} from '../layoutService/index/index2.component';

const routes: Routes = [
      {path:'',component:Index2Component, children:[{
        path:'',component:KhadamatG2GComponent
        }]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceG2GRoutingModule { }

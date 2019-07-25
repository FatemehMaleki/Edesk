import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KhadamatG2BComponent} from './khadamat-g2-b/khadamat-g2-b.component';
import {Index2Component} from '../layoutService/index/index2.component';

const routes: Routes = [

      {path:'',component:Index2Component,children:[{
        path:'',component:KhadamatG2BComponent
        }]}


];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceG2BRoutingModule { }

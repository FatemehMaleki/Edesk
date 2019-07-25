import { ServiceNazarsanjiComponent } from './service-nazarsanji/service-nazarsanji.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Index2Component} from '../layoutService/index/index2.component';

const routes: Routes = [
  {path:'',component:Index2Component,children:[
      {path:'',component:ServiceNazarsanjiComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NazarsanjiRoutingModule { }

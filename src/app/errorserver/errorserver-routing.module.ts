import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ErrorwebserviceComponent} from './errorwebservice/errorwebservice.component';


const routes: Routes = [
  {path:'',component:ErrorwebserviceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorserverRoutingModule { }

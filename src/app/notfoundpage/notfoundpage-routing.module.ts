import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotfoundcomponentComponent} from './notfoundcomponent/notfoundcomponent.component';


const routes: Routes = [
  {path:'',component:NotfoundcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotfoundpageRoutingModule { }

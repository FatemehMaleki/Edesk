
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { IndexComponent } from './index/index.component';
import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Mainbody2Component } from './mainbody2/mainbody2.component';
import {TopMenuComponent} from '../top-menu/top-menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {MainbodyComponent} from './mainbody/mainbody.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [IndexComponent,TopMenuComponent,Mainbody2Component,MainbodyComponent,HeaderComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports:[IndexComponent,TopMenuComponent,Mainbody2Component,MainbodyComponent,HeaderComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class LayoutModule { }

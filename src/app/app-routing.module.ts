import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './layout/index/index.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    // component:IndexComponent

    loadChildren: './layout/layout.module#LayoutModule'
  },
  {
    path: 'shekait',
    loadChildren: './shekait/shekait.module#ShekaitModule'
  },
  {
    path: 'moshahede',
    loadChildren: './moshahedeh-darkhast/moshahedeh-darkhast.module#MoshahedehDarkhastModule'
  },
  {
    path: 'darkhast',
    loadChildren: './darkhast/darkhast.module#DarkhastModule'
  },
  {
    path: 'g2g',
    loadChildren: './service-g2-g/service-g2-g.module#ServiceG2GModule'
  },
  {
    path: 'g2c',
    loadChildren: './service-g2-b/service-g2-b.module#ServiceG2BModule'
  },
  {
    path: 'details/:id',
    loadChildren: './details-service/details-service.module#DetailsServiceModule'
  },
  {
    path: 'pishnehad',
    loadChildren: './pishnehad/pishnehad.module#PishnehadModule'
  },
  {
    path: 'nazarsanji',
    loadChildren: './nazarsanji/nazarsanji.module#NazarsanjiModule'
  },
  {
    path: 'moshavere',
    loadChildren: './moshavereh/moshavereh.module#MoshaverehModule'
  },
  {
    path: 'taghirdarkhast',
    loadChildren: './taghirdarkhast/taghirdarkhast.module#TaghirdarkhastModule'
  },
  {path:'error',
    loadChildren: './errorserver/errorserver.module#ErrorserverModule'
  },
  {path:'**',
    loadChildren: './notfoundpage/notfoundpage.module#NotfoundpageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

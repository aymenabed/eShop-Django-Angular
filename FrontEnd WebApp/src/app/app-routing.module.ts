import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FactureComponent} from './facture/facture.component';

const routes: Routes = [{
  path: '',
  component:HeaderComponent,
  children:[
    {path:'',
      loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
},
    {
      path:"facture",
      component:FactureComponent
    }]

}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

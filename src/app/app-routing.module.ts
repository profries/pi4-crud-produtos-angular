import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';

const routes: Routes = [
  { path:"tabela", component:TabelaProdutosComponent },
  { path:"form", component:FormProdutosComponent },
  { path:"", redirectTo:"/tabela", pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

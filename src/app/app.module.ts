import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from './produto.service';
import { MoedaPipe } from './moeda.pipe';
import { FiltroMarcaPipe } from './filtro-marca.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TabelaProdutosComponent,
    FormProdutosComponent,
    MoedaPipe,
    FiltroMarcaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

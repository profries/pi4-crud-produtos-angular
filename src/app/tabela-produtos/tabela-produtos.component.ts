import { Component, OnInit, Input } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';

@Component({
  selector: 'tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {
  lista:Produto[] = [];
  constructor(private servico: ProdutoService ) {
    this.lista = servico.getProdutos();  
  }

  ngOnInit() {
  }

}

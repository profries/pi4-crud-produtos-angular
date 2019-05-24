import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';

@Component({
  selector: 'form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  produto:Produto = new Produto();
  constructor(private servico: ProdutoService) { }

  ngOnInit() {
  }

  salvar(){
    this.servico.addProduto(this.produto);
    this.produto = new Produto();

  }

}

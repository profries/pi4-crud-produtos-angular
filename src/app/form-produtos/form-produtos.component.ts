import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  @Output() enviarProduto = new EventEmitter<any>();
  produto = {nome:"",marca:"",preco:""}
  constructor() { }

  ngOnInit() {
  }

  salvar(){
    //Enviar para o componente pai
    this.enviarProduto.emit(this.produto);
  }

}

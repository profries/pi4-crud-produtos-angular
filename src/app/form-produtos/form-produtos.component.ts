import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  produto:Produto;
  id: number;
  constructor(
    private servico: ProdutoService,
    private router: Router, 
    private rota: ActivatedRoute) { }

  ngOnInit() {
    //o id do params deve ter o mesmo nome do parametro da rota
    this.id = this.rota.snapshot.params['id'];
    if(this.id){
      console.log("ID:",this.id);
      this.produto = this.servico.buscarPorId(this.id);
    }
    else{
      console.log("não tem id");
      this.produto = new Produto();
    }
  }

  salvar(){
    if(this.id){
      this.servico.editar(this.id, this.produto);
    }
    else{
      this.servico.addProduto(this.produto);
    }
    this.router.navigate(['/tabela']);
  }

  cancelar(){
    this.router.navigate(['/tabela']);
  }

}

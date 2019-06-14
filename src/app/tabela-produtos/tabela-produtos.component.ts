import { Component, OnInit, Input } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';
import { ProdutoApiService } from '../produto-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {
  lista:Produto[] = [];
  constructor(private api: ProdutoApiService,
    private router: Router) {
    //this.lista = servico.getProdutos();  
    this.api.getProdutos().subscribe(res => {
      this.lista = res;
      console.log(this.lista);
    }, err => { 
      console.error("Erro: "+err);
    });
  }

  ngOnInit() {
  }

  deletar(id){
    //this.servico.deletar(id);
    this.api.deleteProduto(id).subscribe(res => {
      console.log(this.lista);
      this.router.navigate(['/tabela']);
    }, err => { 
      console.error("Erro: "+err);
    });
  }

}

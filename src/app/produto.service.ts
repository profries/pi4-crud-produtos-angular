import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  listaProdutos: Produto[] = [
    {nome:"produto1",marca:"marcax",preco:30.0,dataValidade:new Date(2019,10,20)},
    {nome:"produto2",marca:"marcay",preco:40.0,dataValidade:new Date(2019,10,20)},
    {nome:"produto3",marca:"marcax",preco:60.0,dataValidade:new Date(2019,10,20)},
    {nome:"produto4",marca:"marcay",preco:70.0,dataValidade:new Date(2019,10,20)}
    
  ];
  constructor() { }

  getProdutos(): Produto[]{
    return this.listaProdutos;
  }

  addProduto(produto:Produto){
    this.listaProdutos.push(produto);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Crud Produtos';
  listaProdutos = [
    {nome:"produto1",marca:"marcax",preco:30.0},
    {nome:"produto2",marca:"marcay",preco:40.0},
    {nome:"produto3",marca:"marcax",preco:60.0},
    {nome:"produto4",marca:"marcay",preco:70.0}
    
  ];

  adicionarProduto(produto:any){
    this.listaProdutos.push(produto);
  }
  
}

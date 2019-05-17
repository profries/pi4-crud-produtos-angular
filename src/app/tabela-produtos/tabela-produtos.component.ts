import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {
  produtos = [
    {nome:"produto1",marca:"marcax",preco:30.0},
    {nome:"produto2",marca:"marcay",preco:40.0},
    {nome:"produto3",marca:"marcax",preco:60.0},
    {nome:"produto4",marca:"marcay",preco:70.0}
    
  ];
  constructor() { }

  ngOnInit() {
  }

}

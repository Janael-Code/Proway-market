import { Injectable } from '@angular/core';
import { IProduto, itens } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

produtos: IProduto[] = itens;

  constructor() { }

  getALL(){
    return this.produtos;

  }
  getOne(produtoId: number){
    return this.produtos.find(produto => produto.id = produtoId);
  }
}

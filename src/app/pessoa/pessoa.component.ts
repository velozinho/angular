import { Component, OnInit } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
pessoa : Pessoa;
pessoas: Array<Pessoa>;
  


  constructor() { }

  ngOnInit() {

    this.pessoa = new Pessoa();
    this.pessoas= new Array();

  }

  salvar (){
  this.pessoa.id = this.pessoas.length + 1;
  this.pessoas.push(this.pessoa);
  this.pessoa = new Pessoa();
  }

  excluir(idRemover:number){
    let posicao = this.pessoas.findIndex(pessoa => pessoa.id === idRemover); 
    this.pessoas.splice(posicao,1);
   
  }

}

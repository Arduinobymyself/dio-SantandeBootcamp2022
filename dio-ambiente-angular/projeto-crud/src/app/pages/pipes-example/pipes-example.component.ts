import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number = 0;
  text = 'hELLo WORld!';
  date = new Date();

  pessoa = {
    nome: 'Marcelo',
    idade: '51',
    profissao: 'Engenheiro'
  }

  nomes = ['Marcelo'];


  constructor() { }

  ngOnInit(): void {

  }

  mudaValor() {
    this.number = 123456789;
  }
  mudaTexto() {
    this.text = 'OLá mUNdo!';
  }

  add(texto: string){
    this.nomes.push(texto);
  }

}

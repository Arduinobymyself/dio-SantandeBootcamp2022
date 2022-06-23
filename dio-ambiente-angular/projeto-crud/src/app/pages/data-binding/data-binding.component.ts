import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  // for interpolation tests
  testeInterpolation = 'Marcelo Moraes';
  text = 'Olá seja bem vindo!';

  // for property-binding tests
  imgSrc = 'https://picsum.photos/200/200';
  imgAlt = 'Esta é uma imagem do LoremPicsum'

  // for event-binding tests
  newText = ''

  // for class-binding tests
  buttonText = 'Clique Aqui!';
  textRed = false;

  //for style-binding tests
  bgColor = 'green';
  fontSize = '48px';
  widthImg = 600;

  // for two-way data binding
  textInput = '';

  // for life-cycle tests
  number = 0;
  destroy = false;


  constructor() { }

  ngOnInit(): void {
  }

  greetings () {
    return this.text;
  }
  clicked(value: string){
    console.log('clicou aqui', value);
    this.newText = 'Clicou';
    this.textRed = !this.textRed;
  }

  clicouNoFilho(text: any) {
    console.log(text);
  }

  incrementa() {
    this.number++;
  }

  destroyComponente(){
    this.destroy = true;
  }

}

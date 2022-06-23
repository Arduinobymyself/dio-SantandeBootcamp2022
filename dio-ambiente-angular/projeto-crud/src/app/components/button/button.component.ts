import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() btnText: string = 'Default';
  @Input() btnType: string = '';

  @Output() clickChild = new EventEmitter;
  textFilho = 'clicou no filho';

  constructor() { }

  ngOnInit(): void {
  }

  clicou(){
    this.clickChild.emit(this.textFilho);
  }

}

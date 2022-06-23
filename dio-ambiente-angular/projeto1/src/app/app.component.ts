import { Observable } from 'rxjs';
import { PeopleService } from './shared/services/people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;

  pessoas = [
    {
      firstName: '',
      lastName: '',
      age: 0
    }
  ];

  nome = 'Marcelo Pinto de Moraes';

  texto: string = '';

  constructor(private peopleService: PeopleService){

  }

  ngOnInit(): void {
    console.log(this.pessoas)
    this.getPeople();
      let interval = setInterval(() => {
        this.count++;
        if(this.count === 10){
          clearInterval(interval);
        }
      }, 1000)
  }

  clicou(nome: string): void{
    console.log(`${nome} clicou em mim!`);
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  }

}

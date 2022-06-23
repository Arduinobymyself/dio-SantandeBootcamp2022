import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: 'Marcelo',
        lastName: 'Moraes',
        age: 51
      },
      {
        firstName: 'Flora',
        lastName: 'Maria',
        age: 54
      },
      {
        firstName: 'Sara',
        lastName: 'Lima',
        age: 14
      },
      {
        firstName: 'Gabriel',
        lastName: 'Lima',
        age: 26
      }
    ];

    return of(peopleArray);

  }
}

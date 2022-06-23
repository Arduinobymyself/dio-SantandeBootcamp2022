import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


export type apiResponse = {
  info: {},
  results: {},
}


@Injectable({
  providedIn: 'root'
})
export class ListApiService {
  apiUrl: string = "https://rickandmortyapi.com/api/character";
  //apiUrl: string = "https://pokeapi.co/api/v2/pokemon/ditto"

  constructor(private httpClient: HttpClient) { 

  }

  getList(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl)
  }

}

import { ListApiService, apiResponse } from './../../services/list-api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {
  personagens: Array<any> = [];

  constructor(private listService: ListApiService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.listService.getList().subscribe(result => {
      this.personagens = result?.results;
      console.log(this.personagens);
    })
  }

}

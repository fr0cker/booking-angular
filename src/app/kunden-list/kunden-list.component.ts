import { Component, OnInit } from '@angular/core';
import { Kunde } from 'src/models/kunde';

@Component({
  selector: 'app-kunden-list',
  templateUrl: './kunden-list.component.html',
  styleUrls: ['./kunden-list.component.css']
})
export class KundenListComponent implements OnInit {

  kunden: Kunde[];

  constructor() {

    this.kunden = [
      { Id: 1, Name: 'Franz'},
      { Id: 2, Name: 'Ageliki'},
      { Id: 3, Name: 'Joshi'}
    ];

   }

  ngOnInit() {
  }

}

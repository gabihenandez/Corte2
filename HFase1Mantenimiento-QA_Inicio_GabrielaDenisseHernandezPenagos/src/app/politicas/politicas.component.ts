import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { UsersService } from "../users/users.service";

@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.css']
})

export class PoliticasComponent implements OnInit {
  politicas=null;
  
  art={
    id:null,
    nombrePro:null,
    descripcion:null,
    tipoP:null,
  }

  lista:string[]=["General", "Cliente"];

  constructor(protected dashService: UsersService) { }

  ngOnInit() {
    this.recuperarTodosP();
  }

  recuperarTodosP() {
    this.dashService.recuperarTodosP().subscribe(result => this.politicas = result);
  }

  seleccionar(id) {
    this.dashService.seleccionarP(id).subscribe(result => this.art = result[0]);
  }

  alta() {
    this.dashService.RegistroP(this.art).subscribe(datosp => {
      if (datosp['resultado']=='OK') {
        alert(datosp['mensaje']);
        this.recuperarTodosP();
      }
      //window.location.replace("http://localhost:4200/datosp")
    });
  }

  
  baja(id) {
    this.dashService.bajaP(id).subscribe(datosp => {
      if (datosp['resultado']=='OK') {
        alert(datosp['mensaje']);
        this.recuperarTodosP();
      }
    });


  }
  
  modificacion() {
    this.dashService.modificacionP(this.art).subscribe(datosp => {
      if (datosp['resultado']=='OK') {
        alert(datosp['mensaje']);
        this.recuperarTodosP();
      }
    });    
  }

  hayRegistros() {
    return true;
  } 


}
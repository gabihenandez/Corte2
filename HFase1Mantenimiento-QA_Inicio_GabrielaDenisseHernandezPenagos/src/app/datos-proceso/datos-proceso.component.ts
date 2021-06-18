import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users/users.service";
@Component({
  selector: 'app-datos-proceso',
  templateUrl: './datos-proceso.component.html',
  styleUrls: ['./datos-proceso.component.css']
})
export class DatosProcesoComponent implements OnInit {
  articulos:any;

  art={
    
    nombreProceso:null,
    proposito:null,
    identificador:null,
    indicadores:null,
    descripcion:null,
    responsable:null,
    categoria:null,
    participantes:null,
    procesoRe:null,
    evidenciaSa:null,
    evidenciaEn:null,
    id:null,
    empresa:null,
    empresab:null
  }

  art2={
    empresab:null,
    NombreProseso:null,
    Participante:null,
  }
  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.recuperarTodos();
    console.log(this.recuperarTodos());
  }

  recuperarTodos() {
    this.userService.recuperarTodos().subscribe(result => this.articulos = result);
  }

  // recuperarPart(NombreProseso){
  //   this.userService.recuperarPart().subscribe(result => this.art2 = result[0]);
  // }

  baja(codigo) {
    this.userService.baja(codigo).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

   modificacion() {
    this.userService.modificacion(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  seleccionar(codigo) {
    this.userService.seleccionar(codigo).subscribe(result => this.art = result[0]);
  }

  hayRegistros() {
    return true;
  } 
}

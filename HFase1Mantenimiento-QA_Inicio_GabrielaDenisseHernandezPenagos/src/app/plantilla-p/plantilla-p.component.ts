import { Component, OnInit } from '@angular/core';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { UsersService } from "../users/users.service";

@Component({
  selector: 'app-plantilla-p',
  templateUrl: './plantilla-p.component.html',
  styleUrls: ['./plantilla-p.component.css']
})
export class PlantillaPComponent implements OnInit {

  articulos=null;
  
  art={
    id:null,
    entrada:null,
    tipop:null,
    salidae:null,
    descripcion:null
  }

  constructor(protected dashService: UsersService) { }

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.dashService.recuperarTodosPla().subscribe(result => this.articulos = result);
  }

  alta() {
    this.dashService.Registro(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
      window.location.replace("http://localhost:4200/Datosp")
    });
  }
  
  hayRegistros() {
    return true;
  } 
}

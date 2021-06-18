import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users/users.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  articulos: any;

  art={
    nombreProyecto:null,
    nombreEmpresa:null,
    Participante:null,

  }

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
  }

  // recuperarPart(nombreProyecto){
  //   this.userService.recuperarPart().subscribe(result => this.art = result[0]);
  // }

  altaParticipante() {
    this.userService.altaParticipante(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
       // this.recuperarPart(this.art.nombreProyecto);
      }
    });
  }

}

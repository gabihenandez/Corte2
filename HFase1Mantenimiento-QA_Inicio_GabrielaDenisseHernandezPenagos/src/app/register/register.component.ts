import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users/users.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  participantes:any;
  part={
    empresa:null,
    nombre:null,
    usuario:null,
    passwords:null,
    tipoP:null
  }
  

  constructor(public userService: UsersService) {}

  ngOnInit(): void {
  }

  registro() {
    this.userService.registro(this.part).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        window.location.replace("http://localhost:4200/Login");
      }
    });
  }
}

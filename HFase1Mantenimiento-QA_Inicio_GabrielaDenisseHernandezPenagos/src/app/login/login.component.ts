import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users/users.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  log = {
    empresa:null,
    usuario: null,
    passwords: null,
    tipoP: null
  }
  constructor(public userService: UsersService,private router:Router) {}

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.log).subscribe (
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          if(this.log.tipoP == 'product'){
            this.router.navigate(['Dashboard']);
          }
          if(this.log.tipoP == 'tester'){
            this.router.navigate(['PlantillaPruebas']);
          }
        } else {
          alert(datos['mensaje']);
        }
      }
    );
  }
}

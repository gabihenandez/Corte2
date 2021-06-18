import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url='http://localhost/AngularPHP/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

 
  recuperarPart() {
    return this.http.get(`${this.url}recuperartodos.php?`);
  }
  
  altaParticipante(arti){
    return this.http.post(`${this.url}altaParticipante.php`, JSON.stringify(arti));
  }

  //
  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }

  recuperarTodos2() {
    return this.http.get(`${this.url}recuperartodos2.php`);
  }

  alta(articulo) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(articulo));    
  }


  alta2(articulo) {
    return this.http.post(`${this.url}alta2.php`, JSON.stringify(articulo));    
  }

  baja(id:number) {
    return this.http.get(`${this.url}baja.php?id=${id}`);
  }

  baja2(id:number) {
    return this.http.get(`${this.url}baja2.php?id=${id}`);
  }
  
  seleccionar(id:number) {
    return this.http.get(`${this.url}seleccionar.php?id=${id}`);
  }

  seleccionar2(id:number) {
    return this.http.get(`${this.url}seleccionar2.php?id=${id}`);
  }

  modificacion(articulo) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(articulo));    
  } 

  modificacion2(articulo) {
    return this.http.post(`${this.url}modificacion2.php`, JSON.stringify(articulo));    
  }


  public url_servidor = "http://localhost/AngularPHP/Imagen.php";
  public postFileImagen(imagenParaSubir: File){

        const formData = new FormData(); 
        formData.append('imagenPropia', imagenParaSubir, imagenParaSubir.name); 
        return this.http.post(this.url_servidor, formData);

    }


    // Richard
    recuperarTodosPla() {
      return this.http.get(`${this.url}recuperartodosPla.php`);
    }
  
    Registro(datos) {
      return this.http.post(`${this.url}altaPla.php`, JSON.stringify(datos));    
    }
    
    bajaPla(id:number) {
      return this.http.get(`${this.url}bajaPla.php?id=${id}`);
    }
    
    seleccionarPla(id:number) {
      return this.http.get(`${this.url}seleccionarPla.php?id=${id}`);
    }
  
    modificacionPla(articulo) {
      return this.http.post(`${this.url}modificacionPla.php`, JSON.stringify(articulo));    
    } 

    //Login
    registro(participantes) {
      return this.http.post(`${this.url}registro.php`, JSON.stringify(participantes));
    }
  
    login(login){
      return this.http.post(`${this.url}login.php`, JSON.stringify(login));
    }

    recuperarTodosP() {
      return this.http.get(`${this.url}recuperarPoliticas.php`);
    }
  
    RegistroP(datosp) {
      return this.http.post(`${this.url}altaPoliticas.php`, JSON.stringify(datosp));    
    }
  
    bajaP(id:number) {
      return this.http.get(`${this.url}bajaPoliticas.php?id=${id}`);
    }
    
    seleccionarP(id:number) {
      return this.http.get(`${this.url}seleccionarPolitica.php?id=${id}`);
    }
  
    modificacionP(datosp) {
      return this.http.post(`${this.url}modificacionPoliticas.php`, JSON.stringify(datosp));    
    }
}
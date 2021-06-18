import { Component, OnInit} from '@angular/core';
import { UsersService } from "../users/users.service";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {
  title = "app";
  articulos:any;
  arti:any;
  public respuestaImagenEnviada;
  public resultadoCarga;

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
    fase:null,
  }

  art2={
    NombreProseso:null,
    Participante:null,
  }

  constructor(public userService: UsersService) {}

  ngOnInit() {
    this.recuperarTodos();
    console.log(this.recuperarTodos());
  }

  recuperarTodos() {
    this.userService.recuperarTodos().subscribe(result => this.articulos = result);
  }
  
  alta() {
    this.userService.alta(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

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
 
  altaParticipante() {
    this.userService.altaParticipante(this.art2).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        console.log("Hola :",this.art2.NombreProseso)
       // this.recuperarPart(this.art2.NombreProseso);
      }
    });
  }

  public cargandoImagen(files: FileList){
    

    this.userService.postFileImagen(files[0]).subscribe(

        response => {
            this.respuestaImagenEnviada = response; 
            if(this.respuestaImagenEnviada <= 1){
                console.log("Error en el servidor"); 
            }else{

                if(this.respuestaImagenEnviada.code == 200 && this.respuestaImagenEnviada.status == "success"){

                    this.resultadoCarga = 1;

                }else{
                    this.resultadoCarga = 2;
                }

            }
        },
        error => {
            console.log(<any>error);
        }

    );//FIN DE METODO SUBSCRIBE


    

  }
  generatePdf(){
    let horaFechaActual = new Date();
    var docDefinition = {
      content: [
        {
          text: 'Datos Guardados\n\n',
          style: 'header',
          frontSize: 20
        },
        {
          text: [
            {text: 'Nombre de la empresa: ', fontSize: 15, bold: true},
            {text: this.art.empresa, fontSize: 15},
            {text: '\nFecha: ' ,fontSize: 15, bold: true },
            {text: horaFechaActual},
            {text: '\n\nProceso: ', fontSize: 15, bold: true},
            {text: this.art.nombreProceso, fontSize: 12},
            {text: '\t\t\t\t\t\t\t\t\t\tIdentificador: ', fontSize: 15, bold: true},
            {text: this.art.identificador, fontSize: 12},
            {text: '\n\nFase: ', fontSize: 15, bold: true},
            {text: this.art.fase, fontSize: 12, alignment: 'justify'},
            {text: '\n\nProposito:\n', fontSize: 15, bold: true},
            {text: this.art.proposito, fontSize: 12, alignment: 'justify'},
            {text: '\n\nIndicadores:\n', fontSize: 15, bold: true},
            {text: this.art.indicadores, fontSize: 12, alignment: 'justify'},
            {text: '\n\nDescripcion:\n', fontSize: 15, bold: true},
            {text: this.art.descripcion, fontSize: 12, alignment: 'justify'},
            {text: '\n\nResponsable:\n', fontSize: 15, bold: true},
            {text: this.art.responsable, fontSize: 12, alignment: 'justify'},
            {text: '\n\nCategoria:\n', fontSize: 15, bold: true},
            {text: this.art.categoria, fontSize: 12, alignment: 'justify'},
            {text: '\n\nEvidencias de salida:\n', fontSize: 15, bold: true},
            {text: this.art.evidenciaSa, fontSize: 12, alignment: 'justify'},
            {text: '\n\nEvidencias de entradas:\n', fontSize: 15, bold: true},
            {text: this.art.evidenciaEn, fontSize: 12, alignment: 'justify'},
          ]
        },
      ],
      styles: {
        header: {
          alignment: "center",
          fontSize: 20,
          bold: true
        },
        bigger: {
          fontSize: 15,
          italics: true
        }
      }
    };
    pdfMake.createPdf(docDefinition).open();
   }

  

}

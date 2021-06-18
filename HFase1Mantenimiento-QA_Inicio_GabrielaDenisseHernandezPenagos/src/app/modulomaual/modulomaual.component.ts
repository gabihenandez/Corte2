import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users/users.service";


@Component({
  selector: 'app-modulomaual',
  templateUrl: './modulomaual.component.html',
  styleUrls: ['./modulomaual.component.css']
})
export class ModulomaualComponent implements OnInit {

  articulos:any;

  art={
    id:null,
    nombreEmpresa:null,
    objetivoM:null,
    alcanse:null,
    vocabulario:null,
    mision:null,
    vision:null,
    politicas:null
  }

  constructor(public userService: UsersService) {}

  ngOnInit() {
    this.recuperarTodos();
    console.log(this.recuperarTodos())
  }

  generatePdf(){

    var docDefinition = {
      content: [
        {
          text: 'Modulo Manual\n\n',
          style: 'header'
        },
        {
          text: [
            {text: 'Nombre de la empresa: ', fontSize: 15, bold: true},
            {text: this.art.nombreEmpresa, fontSize: 11},
            {text: '\n\nObjetivo del manual\n', fontSize: 15, bold: true},
            {text: this.art.objetivoM, fontSize: 11, alignment: 'justify'},
            {text: '\n\nAlcanse\n', fontSize: 15, bold: true},
            {text: this.art.alcanse, fontSize: 11, alignment: 'justify'},
            {text: '\n\nVocabulario\n', fontSize: 15, bold: true},
            {text: this.art.vocabulario, fontSize: 11, alignment: 'justify'},
            {text: '\n\nCondiciones generales\n', fontSize: 15, bold: true},
            {text: '\n\nMision\n', fontSize: 13, bold: true},
            {text: this.art.mision, fontSize: 11, alignment: 'justify'},
            {text: '\n\nVision\n', fontSize: 13, bold: true},
            {text: this.art.vision, fontSize: 11, alignment: 'justify'},
            {text: '\n\nPoliticas\n', fontSize: 13, bold: true},
            {text: this.art.politicas, fontSize: 11, alignment: 'justify'},
          ]
        },
      ],
      styles: {
        header: {
          alignment: "center",
          fontSize: 18,
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

  recuperarTodos() {
    this.userService.recuperarTodos2().subscribe(result => this.articulos = result);
  }

  alta() {
    this.userService.alta2(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(id) {
    this.userService.baja2(id).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.userService.modificacion2(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });    
  }
  
  seleccionar(id) {
    this.userService.seleccionar2(id).subscribe(result => this.art = result[0]);
  }

  hayRegistros() {
    return true;
  } 

}


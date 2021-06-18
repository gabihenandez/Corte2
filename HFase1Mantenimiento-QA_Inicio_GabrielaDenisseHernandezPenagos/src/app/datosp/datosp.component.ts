import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users/users.service";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-datosp',
  templateUrl: './datosp.component.html',
  styleUrls: ['./datosp.component.css']
})
export class DatospComponent implements OnInit {

  articulos:any;
  
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

  baja(codigo) {
    this.dashService.bajaPla(codigo).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    console.log(this.art.descripcion);
    this.dashService.modificacionPla(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });    
  }
  
  seleccionar(codigo) {
    this.dashService.seleccionarPla(codigo).subscribe(result => this.art = result[0]);
  }

  generatePdf() {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('Dato de la tabla.pdf');
    });
  }
  
  hayRegistros() {
    return true;
  } 

}

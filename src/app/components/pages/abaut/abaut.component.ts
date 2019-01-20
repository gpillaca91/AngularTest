import { Component, OnInit } from '@angular/core';
import { PaginainfoService } from '../../../services/paginainfo.service';

@Component({
  selector: 'app-abaut',
  templateUrl: './abaut.component.html',
  styles: []
})
export class AbautComponent implements OnInit {
  equipoTrabajo:any[] = [];
  constructor(public _infoPagina:PaginainfoService) {
    // _infoPagina.cargarEquipo().subscribe(
    //   (data:any[])=>{
    //     this.equipoTrabajo = data;
    //     console.log(this.equipoTrabajo);
    //   }
    // );
   }

  ngOnInit() {
  }

}

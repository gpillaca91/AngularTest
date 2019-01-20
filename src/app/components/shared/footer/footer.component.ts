import { Component, OnInit } from '@angular/core';
import { PaginainfoService } from '../../../services/paginainfo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

   anio:number = new Date().getFullYear();
  constructor( public _infoService:PaginainfoService ) { }
  

  ngOnInit() {
  }

}

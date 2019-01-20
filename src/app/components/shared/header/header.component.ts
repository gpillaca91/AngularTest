import { Component, OnInit } from '@angular/core';
import { PaginainfoService } from '../../../services/paginainfo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor( public _infoService:PaginainfoService,
               public router:Router
              ) { 
    
    
  }
  ngOnInit() {
  }
  buscarProducto(termino:string){
    if( termino.length > 0 ){
      this.router.navigate(['buscar',termino]);
    }else{
      return;
    }
        
        
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoServiceService } from '../../../services/producto-service.service';

@Component({
  selector: 'app-buscar-productos',
  templateUrl: './buscar-productos.component.html',
  styles: []
})
export class BuscarProductosComponent implements OnInit {

  constructor( private activatedRoute:ActivatedRoute,
               public _ps:ProductoServiceService) { }

  ngOnInit() {
      this.activatedRoute.params.subscribe(
        params=>{
          this._ps.buscarPorductos(params['termino']);      
        }
      );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoServiceService } from '../../../services/producto-service.service';
// interfaces
import { ProductoDetalle } from '../../../interfaces/producto-detalle.interface';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent implements OnInit  {

  codigo:string;
  productoDetalle:ProductoDetalle = { } ;
  

  // metodos
  constructor( private _ps:ProductoServiceService ,private router:ActivatedRoute ) {
    

    
   }// constructor
ngOnInit(){
  this.router.params.subscribe(
    parametros=> {
      this.codigo = parametros['id'];
          this._ps.DetalleProducto( parametros['id'] )
              .subscribe(
                
                (data:ProductoDetalle)=>{
                  
                  console.log(this.codigo);
                  this.productoDetalle = data;
                  console.log(data);
                  
                }
              );
        
       
    }
  );
}

  
}

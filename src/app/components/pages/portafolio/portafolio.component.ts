import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from '../../../services/producto-service.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styles: []
})
export class PortafolioComponent{
  // propiedades



  // metodos
  constructor(public _ps:ProductoServiceService) {
  }
  
  
}

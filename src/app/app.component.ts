import { Component } from '@angular/core';
import { ProductoServiceService } from './services/producto-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor( private _ps:ProductoServiceService ){

  }
}

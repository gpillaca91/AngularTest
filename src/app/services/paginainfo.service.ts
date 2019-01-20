import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaginainfoService {

  cargado = true;
  paginaInfo:any [];
  equipo:any [];
  constructor(private http:HttpClient ) {
    this.infoPagina();
    this.cargarEquipo();
  } //constructor
  
  
  infoPagina(){
    this.http.get('assets/data/pagina-info.json').subscribe(
      (respuesta:any) => {
        this.paginaInfo = respuesta;
      }
    );
  }// infoPagina
  cargarEquipo(){
    this.http.get('https://equipotrabajo-911c5.firebaseio.com/equipo.json')
   .subscribe(
     (data:any[])=>{
        this.equipo = data;
        
     }
   );  
  }// cargarEquipo


}// class

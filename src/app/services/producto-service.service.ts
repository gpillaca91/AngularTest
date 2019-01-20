import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// interface
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {
  // propiedades
  
  private urlParcial = 'https://equipotrabajo-911c5.firebaseio.com';
  productos:Producto[]=[];
  cargoProductos:boolean;
  productosEcontrados:Producto[]=[];
  
  constructor(private http:HttpClient) { 
    this.cargarProductos();
  }

  cargarProductos(){
    this.cargoProductos = false;
    let url = `${ this.urlParcial }/productos_idx.json`;
     return new Promise(( resolve , reject)=>{
         this.http.get(url)
                        .subscribe(
                          (data:Producto[])=>{
                            this.productos = data;
                            this.cargoProductos = true;
                            resolve();        
                          }
                        );
                  
     });
   
                         
  } //cargarProductos

  DetalleProducto(codigo:string){
    let url:string;
    if(!codigo){
        return;
    }else{
       url = `${ this.urlParcial }/productos/${ codigo }.json`;
       return this.http.get(url);
    }
    
  }
  buscarPorductos( termino:string ){
     if(this.productos.length === 0){
      // aun no se carga los productos  --- Esperar
      this.cargarProductos().then(()=>{
        //aplicar filtro
        this.filtrarProductos(termino);
      });
     }else{
       // aplicar Filtro
       this.filtrarProductos(termino);
     } 

  } // buscarPorductos

  private filtrarProductos(termino:string){
    this.cargoProductos = false;
    this.productosEcontrados  = [];
    termino = termino.toLocaleLowerCase();
    
    this.productos.forEach( (prod:Producto) =>{
      let categoriaLoweCase = prod.categoria.toLocaleLowerCase();  
      let tituloLoweCase = prod.titulo.toLocaleLowerCase();  
      if( categoriaLoweCase.indexOf( termino ) >= 0 || tituloLoweCase.indexOf( termino ) >= 0 ){
        
            this.cargoProductos = true;
            this.productosEcontrados.push(prod);
          
          
      }
      
    });
    console.log(this.productosEcontrados);
    
  }
}

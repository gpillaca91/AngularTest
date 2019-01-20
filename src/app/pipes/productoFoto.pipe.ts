import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productoPipe'
})
export class ProductoFotoPipe implements PipeTransform {

  transform(value: any): any {
    const url='assets/img/';
    return `${ url } ${ value}.jpg`;
  }

}

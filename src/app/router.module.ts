import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PortafolioComponent } from './components/pages/portafolio/portafolio.component';
import { AbautComponent } from './components/pages/abaut/abaut.component';
import { ItemComponent } from './components/pages/item/item.component';
import { BuscarProductosComponent } from './components/pages/buscar-productos/buscar-productos.component';




const routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'portafolio', component: PortafolioComponent },
    { path: 'about', component: AbautComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: 'buscar/:termino', component: BuscarProductosComponent },
    { path: '**', pathMatch :'full' , redirectTo :'home' },

];

@NgModule({
    // tslint:disable-next-line:no-trailing-whitespace
    imports: [RouterModule.forRoot(routes)],
    exports : [ RouterModule ]
})
export class FeatureRoutingModule {

}

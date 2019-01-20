import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PortafolioComponent } from './components/pages/portafolio/portafolio.component';
import { AbautComponent } from './components/pages/abaut/abaut.component';
import { ItemComponent } from './components/pages/item/item.component';
import { FeatureRoutingModule } from './router.module';
import { ProductoFotoPipe } from './pipes/productoFoto.pipe';

import { LoadingComponent } from './components/shared/loading/loading.component';
import { BuscarProductosComponent } from './components/pages/buscar-productos/buscar-productos.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AbautComponent,
    ItemComponent,
    ProductoFotoPipe,
    LoadingComponent,
    BuscarProductosComponent
    
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

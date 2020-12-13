import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { FiltroPipe } from './filtro.pipe';
import { ListaNegocioComponent } from './lista-negocio/lista-negocio.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    FiltroPipe,
    ListaNegocioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

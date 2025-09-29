import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { CinepolisComponent } from './formularios/cinepolis/cinepolis.component';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    CinepolisComponent,
    OperasBasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Esta es la línea clave que corrige el problema.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
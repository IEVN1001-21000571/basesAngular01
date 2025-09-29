import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  Nombre: string = '';
  CantidadCompradores: number = 1;
  Tarjeta: string = 'NO';
  CantidadBoletos: number = 1;
  total: number = 0;
  costoBoleto: number = 12;

  mensaje: string = '';

  Procesar(): void {
    if (this.CantidadCompradores <= 0 || this.CantidadBoletos <= 0) {
      alert('Las personas y los boletos deben ser mayor a 0');
      this.total = 0;
      return;
    }

    const limiteBoletos = 7 * this.CantidadCompradores;
    if (this.CantidadBoletos > limiteBoletos) {
      alert(`Por persona solo se pueden adquirir 7 boletos`);
      this.total = 0;
      return;
    }

    let totalBase = this.costoBoleto * this.CantidadBoletos;
    let descuentoTotal = 0;

    if (this.CantidadBoletos > 5) {
      descuentoTotal = totalBase * 0.15;
    } else if (this.CantidadBoletos >= 3) {
      descuentoTotal = totalBase * 0.10;
    }

    let subtotalConDescuentoBoletos = totalBase - descuentoTotal;
    
    if (this.Tarjeta === 'SI') {
      descuentoTotal += subtotalConDescuentoBoletos * 0.10;
    }

    this.total = totalBase - descuentoTotal;
    
    console.log("Total a pagar:", this.total);
  }
}
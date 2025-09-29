import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {
  num1: string = '';
  num2: string = '';

  resultado: number | string = 0;

  operacionSeleccionada: string = 'suma';

  calcular(): void {
    const n1 = parseFloat(this.num1);
    const n2 = parseFloat(this.num2);

    if (isNaN(n1) || isNaN(n2)) {
      this.resultado = "Error: Por favor, ingresa números válidos.";
      console.error("Una de las entradas no es un número.");
      return;
    }

    switch (this.operacionSeleccionada) {
      case 'suma':
        this.resultado = n1 + n2;
        break;
      case 'resta':
        this.resultado = n1 - n2;
        break;
      case 'multiplicacion':
        this.resultado = n1 * n2;
        break;
      case 'division':
        if (n2 !== 0) {
          this.resultado = n1 / n2;
        } else {
          this.resultado = 'Error: No se puede dividir por cero';
          console.error('Intento de división por cero detectado.');
        }
        break;
      default:
        this.resultado = "Operación no reconocida";
        break;
    }
  }
}
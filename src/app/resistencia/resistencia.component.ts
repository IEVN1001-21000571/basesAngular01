import { Component } from '@angular/core';



@Component({

selector: 'app-resistencia',
standalone: false,
templateUrl: './resistencia.component.html',
styleUrl: './resistencia.component.css'
})

export class ResistenciaComponent {
coloresBanda: { [clave: string]: string } = {
'0': 'black',
'1': 'brown',
'2': 'red',
'3': 'orange',
'4': 'yellow',
'5': 'green',
'6': 'blue',
'7': 'purple',
'8': 'gray',
'9': 'white'
};



coloresMulti: { [clave: string]: string } = {
'1': 'black',
'10': 'brown',
'100': 'red',
'1000': 'orange',
'10000': 'yellow',
'100000': 'green',
'1000000': 'blue',
'10000000': 'purple',
'100000000': 'gray',
'1000000000': 'white'
};


coloresTolerancia: { [clave: string]: string } = {
'0.05': 'gold',
'0.1': 'silver'
};



banda1!:string;
banda2!:string;
bandaMulti!:string;
bandaTolerancia!: string;
valorResistencia!: number;
valorTolerancia!: number;
valorMin!: number;
valorMax!: number;
colorBanda1!: string;
colorBanda2!: string;
colorBandaMulti!: string;
colorBandaTolerancia!: string;
unidad!: string;



calcular():void {

this.valorResistencia = parseInt(this.banda1 + this.banda2) * parseInt(this.bandaMulti);
this.valorTolerancia = this.valorResistencia * parseFloat(this.bandaTolerancia);
this.valorMin = this.valorResistencia - this.valorTolerancia;
this.valorMax = this.valorResistencia + this.valorTolerancia;
this.colorBanda1 = this.coloresBanda[this.banda1];
this.colorBanda2 = this.coloresBanda[this.banda2];
this.colorBandaMulti = this.coloresMulti[this.bandaMulti];
this.colorBandaTolerancia = this.coloresTolerancia[this.bandaTolerancia];



if (this.valorResistencia >= 1000 && this.valorResistencia < 1000000) {
this.valorResistencia = (this.valorResistencia / 1000);
this.valorMin = (this.valorMin / 1000);
this.valorMax = (this.valorMax / 1000);
this.unidad = "kΩ";

} else if(this.valorResistencia >= 1000000 && this.valorResistencia < 1000000000) {
this.valorResistencia = (this.valorResistencia / 1000000);
this.valorMin = (this.valorMin / 1000000);
this.valorMax = (this.valorMax / 1000000);
this.unidad = "MΩ";

} else if(this.valorResistencia >= 1000000000) {
this.valorResistencia = (this.valorResistencia / 1000000000);
this.valorMin = (this.valorMin / 1000000000);
this.valorMax = (this.valorMax / 1000000000);
this.unidad = "GΩ";
}
}
}
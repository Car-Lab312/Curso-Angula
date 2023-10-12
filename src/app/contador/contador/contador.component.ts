import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    
    <h2> {{titulo}} <h2>
    <h6>La base es : <strong> {{base}} </strong></h6>
    
    <button (click)="acumular(base)" style="background-color: blue;"> + {{base}} </button>
    
    <span> {{numero}} </span>
    
    <button (click)="acumular(-base)" style="background-color: blue;"> - {{base}} </button>
    
    `
})

export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 10;
    base  : number = 5;
  
    /*sumar(){
      this.numero += 1;
    }
  
    restar(){
      this.numero -= 1;
    }*/
  
    acumular( valor: number ){
      this.numero += valor;
}
}
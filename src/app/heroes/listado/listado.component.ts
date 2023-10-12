import { Component } from '@angular/core';
import { HeroesComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroeBorrado: string = '';

  Borrandolist(){
    /*this.heroes.shift();
    console.log('Borrando..');*/

    /*const BorrandoHeroe = this.heroes.shift();
    console.log('Borrando..');
    console.log(BorrandoHeroe);*/

    this.heroeBorrado = this.heroes.shift() || '';
    
  }
}

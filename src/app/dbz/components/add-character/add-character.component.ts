import { Component, EventEmitter, Output } from '@angular/core';
import { characters } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-dd-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharater: EventEmitter<characters> = new EventEmitter();

  public character: characters = 
  {
    name: '',
    power: 0
  }

  emitCharacter():void {
    console.log(this.character);
    if ( this.character.name.length === 0 ) return;

    this.onNewCharater.emit(this.character);

    this.character.name = '';
    this.character.power = 0;
  }

}

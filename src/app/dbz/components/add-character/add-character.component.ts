import { Component, OnInit } from '@angular/core';
import { characters } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-dd-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  public character: characters = 
  {
    name: '',
    power: 0
  }

  emitCharacter():void {
    console.log(this.character);
  }

}

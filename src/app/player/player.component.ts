import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  providers: [CharacterService]
})
export class PlayerComponent implements OnInit {

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

  submitForm(name: string, gender: string, charisma: number, dexterity: number, intelligence: number, strength: number, inventory: string[], gold: number) {
    var newCharacter: Character = new Character(name, gender, charisma, dexterity, intelligence, strength, inventory, gold);
    this.characterService.addCharacter(newCharacter);
  }
}

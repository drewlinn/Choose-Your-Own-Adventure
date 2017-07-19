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

  submitForm(name: string, gender: string, mother: string, childhood: string, apprentice: string, living: string) {
    var charisma = 1;
    var dexterity = 1;
    var intelligence = 1;
    var strength = 1;

    if (mother === "C" || childhood === "C" || apprentice === "C" || living === "C") {
      charisma += 1;
    } else if (mother === "D" || childhood === "D" || apprentice === "D" || living === "D") {
      dexterity += 1;
    } else if (mother === "I" || childhood === "I" || apprentice === "I" || living === "I") {
      intelligence += 1;
    } else if (mother === "S" || childhood === "S" || apprentice === "S" || living === "S") {
      strength += 1;
    }

    var newCharacter: Character = new Character(name, gender, charisma, dexterity, intelligence, strength);
    this.characterService.addCharacter(newCharacter);
  }
}

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

  charisma: number = 1;
  dexterity: number = 1;
  intelligence: number = 1;
  strength: number = 1;
  // checkFirst: boolean = true;
  // checkSecond: boolean = true;
  // checkThird: boolean = true;
  // checkFourth: boolean = true;
  // public stats = [
  //   { value: 'C', display: 'Charisma' },
  //   { value: 'D', display: 'Dexterity' },
  //   { value: 'I', display: 'Intelligence' },
  //   { value: 'S', display: 'Strength' }
  // ];


  constructor(private characterService: CharacterService) { }

  addChar() {
    this.charisma += 1;
  }

  addDex() {
    this.dexterity += 1;
  }

  addInt() {
    this.intelligence += 1;
  }

  addStr() {
    this.strength += 1;
  }

  ngOnInit() {
  }


  submitForm(name: string, gender: string, mother: string, childhood: string, apprentice: string, living: string) {

    let charisma: number = 1;
    let dexterity: number = 1;
    let intelligence: number = 1;
    let strength: number = 1;

    if (mother === "charisma" || childhood === "charisma" || apprentice === "charisma" || living === "charisma") {
      charisma += 1;
    } else if (mother === "dexterity" || childhood === "dexterity" || apprentice === "dexterity" || living === "dexterity") {
       dexterity += 1;
    } else if (mother === "intelligence" || childhood === "intelligence" || apprentice === "intelligence" || living === "intelligence") {
      intelligence += 1;
    } else if (mother === "strength" || childhood === "strength" || apprentice === "strength" || living === "strength") {
      strength += 1;
    }

    var newCharacter: Character = new Character(name, gender, charisma, dexterity, intelligence, strength);
    this.characterService.addCharacter(newCharacter);
    console.log(newCharacter);
  }
}

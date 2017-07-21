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

  // charisma: number = 1;
  // dexterity: number = 1;
  // intelligence: number = 1;
  // strength: number = 1;
  // radioButtonGroup=[mother, childhood, apprentice, living];

  constructor(private characterService: CharacterService) { }


  // addChar() {
  //   this.charisma += 1;
  // }
  //
  // addDex() {
  //   this.dexterity += 1;
  // }
  //
  // addInt() {
  //   this.intelligence += 1;
  // }
  //
  // addStr() {
  //   this.strength += 1;
  // }

  ngOnInit() {
  }


  submitForm(name: string, gender: string, mother: string, childhood: string, apprentice: string, living: string) {

    console.log(mother);
    console.log(childhood);
    console.log(apprentice);
    console.log(living);

    var charisma = 1;
    var dexterity = 1;
    var intelligence = 1;
    var strength = 1;

    if(mother === "charisma" || childhood === "charisma" || apprentice === "charisma" || living === "charisma"){
      charisma++;
    }
    if(mother === "dexterity" || childhood === "dexterity" || apprentice === "dexterity" || living === "dexterity"){
      dexterity++;
    }
    if(mother === "intelligence" || childhood === "intelligence" || apprentice === "intelligence" || living === "intelligence"){
      intelligence++;
    }
    if(mother === "strength" || childhood === "strength" || apprentice === "strength" || living === "strength"){
      strength++;
    }


    console.log(name);
    console.log(gender);
    console.log(charisma);
    console.log(dexterity);
    console.log(intelligence);
    console.log(strength);




    // var stats = document.forms["stats"];
    // var i;
    // for (i = 1; i < stats.length; i++)  {
    //   if (stats.elements[i].checked === true && stats.elements[i].value === 'charisma') {
    //       charisma++;
    //       return charisma;
    //     }
    //   if (stats.elements[i].checked === true && stats.elements[i].value === 'dexterity')
    //     {
    //       dexterity++;
    //       return dexterity;
    //     }
    //   if (stats.elements[i].checked === true && stats.elements[i].value === 'intelligence')
    //     {
    //       intelligence++;
    //       return intelligence;
    //     }
    //   if (stats.elements[i].checked === true && stats.elements[i].value === 'strength')
    //     {
    //       strength++;
    //       return strength;
    //     }
    //     return charisma && dexterity && intelligence && strength
    //   }


    var newCharacter: Character = new Character(name, gender, charisma, dexterity, intelligence, strength);
    this.characterService.addCharacter(newCharacter);
    console.log(newCharacter);
  };
}

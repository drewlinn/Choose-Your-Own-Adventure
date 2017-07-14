import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { CHARACTERS } from './mock-characters';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CharacterService {
  characters: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.characters = database.list('characters');
  }

  getCharacters() {
    return CHARACTERS
  }

  getCharacterById(characterId: number){
    for (var i = 0; i <= CHARACTERS.length; i++)
     {
       if (CHARACTERS[i].id == characterId) {
         return CHARACTERS[i];
       }
     }
  }

}

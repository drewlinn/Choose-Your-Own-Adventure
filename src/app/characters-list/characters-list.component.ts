import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { Router } from '@angular/router';
import { CharacterService } from './../character.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  providers: [CharacterService]
})


export class CharactersListComponent implements OnInit {

  characters: FirebaseListObservable<any[]>;

  constructor(private router: Router, private characterService: CharacterService) {}

  ngOnInit(){
    this.characters = this.characterService.getCharacters();
  }

 goToDetailPage(clickedCharacter: Character) {
    this.router.navigate(['characters', clickedCharacter.id]);
  };
}

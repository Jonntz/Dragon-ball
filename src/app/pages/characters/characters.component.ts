import { Component } from '@angular/core';
import { Character } from '../../interfaces/characters/character.model';
import { CharactersService } from '../../services/characters.service';
import { CardInfoComponent } from '../../components/card-info/card-info.component';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CardInfoComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent {

  // characters$ = new Observable<character[]>();
  characters: Character = { items: [], 
    meta:{
    totalItems: 0,
    itemCount: 0,
    itemsPerPage: 0,
    totalPages: 0,
    currentPage: 0
  }, 
  
  links:{
    first: '',
    previous: '',
    next: '',
    last: ''
  }};

  constructor(private service:CharactersService){
    this.getAllCharacters();
  }

  getAllCharacters() {
    // let data = this.service.getAllCharacters();
    // console.log(data);

    this.service.getAllCharacters()
      .subscribe(character => this.characters = character);
    
  }
}

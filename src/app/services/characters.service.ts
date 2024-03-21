import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Character } from '../interfaces/characters/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private url: string = `${environment.api}/characters`;

  constructor(private httpClient: HttpClient) {
    this.getAllCharacters();
   }

  getAllCharacters(){
    return this.httpClient.get<Character>(this.url);
  }
}

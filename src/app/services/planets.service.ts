import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Planet } from '../interfaces/planets/planet.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private url: string = `${environment.api}/planets`;

  constructor(private httpClient: HttpClient) {
    this.getAllPlanets();
  }

  getAllPlanets(){
    return this.httpClient.get<Planet>(this.url);
  }
}

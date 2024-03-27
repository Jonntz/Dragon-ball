import { Component } from '@angular/core';
import { Planet } from '../../interfaces/planets/planet.model';
import { PlanetsService } from '../../services/planets.service';
import { CardInfoComponent } from '../../components/card-info/card-info.component';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [
    CardInfoComponent
  ],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent {
  planets: Planet = { items: [], 
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


  constructor(private service:PlanetsService){
    this.getAllPlanets();
  }

  getAllPlanets(){
    this.service.getAllPlanets()
      .subscribe(planets => this.planets =planets)
  }
}

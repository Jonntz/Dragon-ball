import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { PlanetsComponent } from './pages/planets/planets.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: '',   redirectTo: '', pathMatch: 'full' },

    {path:'characters', component: CharactersComponent},
    {path:'planets', component: PlanetsComponent}
];

import { Component } from '@angular/core';
import { AkiraComponent } from '../../components/akira/akira.component';
import { MainCardsComponent } from '../../components/main-cards/main-cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AkiraComponent,
    MainCardsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  

}

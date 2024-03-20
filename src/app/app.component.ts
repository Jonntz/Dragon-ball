import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AkiraComponent } from './components/akira/akira.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent, 
    AkiraComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Dragon-API-data';
}

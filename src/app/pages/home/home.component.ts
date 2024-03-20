import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AkiraComponent } from '../../components/akira/akira.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AkiraComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

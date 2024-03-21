import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.scss'
})
export class CardInfoComponent {
  @Input() name : string = '';
  @Input() ki : string = '';
  @Input() race : string = '';
  @Input() gender : string = '';
  @Input() image : string = '';
  @Input() affiliation : string = '';

  //planet
  @Input() isDestroyed : boolean = false;

  //general
  @Input() imgAlt : string = '';
  @Input() isCharacter : boolean = false;

}

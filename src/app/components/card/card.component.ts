import { Component, Input } from '@angular/core';

import { Card } from 'src/app/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input('character') card: Card = {
    id: 0,
    name: '',
    gender: '',
    species: '',
    status: '',
    episode: [],
    image: '',
    type: '',
    url: '',
    created: '',
  };
}

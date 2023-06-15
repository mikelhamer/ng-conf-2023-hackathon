import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from '../character/character.component';
import { CharacterTemplate } from '../models/character_template';

@Component({
  selector: 'app-game-map',
  standalone: true,
  imports: [CommonModule, CharacterComponent],
  templateUrl: './game-map.component.html',
  styleUrls: ['./game-map.component.scss']
})
export class GameMapComponent {
  constructor() {
  }

  currentEnemy: CharacterTemplate = {
    characterImage: 'assets/character_images/joker.jpg',
    name: 'Joker',
    max_hp: 50,
    max_mp: 10,
    strength: 2
  }

  currentHero: CharacterTemplate = {
    characterImage: 'assets/character_images/batman.jpg',
    name: 'Batman',
    max_hp: 60,
    max_mp: 20,
    strength: 5
  }
}

import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharacterComponent} from '../character/character.component';
import {CharacterTemplate} from '../models/character_template';
import {PlayerName} from '../core/action';
import { Subscription } from 'rxjs';
import { GameService } from '../core/game.service';

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

  actionSubscription: Subscription = new Subscription();
  gameService: GameService = inject(GameService);

  batmanWon = false;
  jokerWon = false;

  ngOnInit(): void {
    this.actionSubscription = this.gameService.onAction(action => {
      if (action.gameOver) {
        if (action.sourcePlayer === PlayerName.JOKER) {
          this.batmanWon = true;
        } else {
          this.jokerWon = true;
        }
      }
    })
  }

  currentEnemy: CharacterTemplate = {
    characterImage: 'assets/character_images/joker.jpg',
    name: PlayerName.JOKER,
    max_hp: 50,
    max_mp: 10,
    physicalStrength: 2,
    magicStrength: 2,
  }

  currentHero: CharacterTemplate = {
    characterImage: 'assets/character_images/batman.jpg',
    name: PlayerName.BATMAN,
    max_hp: 60,
    max_mp: 20,
    physicalStrength: 2,
    magicStrength: 2,
  }

}

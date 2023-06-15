import {Component, inject, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Subscription} from 'rxjs';
import {GameService} from '../core/game.service';
import {AttackType, PlayerName} from '../core/action';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input({required: true}) characterImage: string = '';
  @Input({required: true}) name: PlayerName = PlayerName.BATMAN;
  @Input({required: true}) hp: number = 0;
  @Input({required: true}) mp: number = 0;
  @Input({required: true}) physAttackStrength: number = 0;
  @Input({required: true}) magicAttackStrength: number = 0;

  actionSubscription: Subscription = new Subscription();
  gameService: GameService = inject(GameService);

  ngOnInit(): void {
    this.actionSubscription = this.gameService.onAction(action => {
      if (action.targetPlayer === this.name) {
        if (action.attack) {
          this.hp -= action.attack.strength;
          if (this.hp <= 0) {
            this.gameService.performAction({
              sourcePlayer: this.name,
              gameOver: true
            })
          }
        }
      }
    })
  }

  onPhysicalAttack() {
    this.gameService.performAction({
      sourcePlayer: this.name,
      targetPlayer: this.getTarget(),
      attack: {
        type: AttackType.PHYSICAL,
        strength: this.physAttackStrength
      }
    })
  }

  onMagicAttack() {
    this.gameService.performAction({
      sourcePlayer: this.name,
      targetPlayer: this.getTarget(),
      attack: {
        type: AttackType.MAGIC,
        strength: this.magicAttackStrength
      }
    })
  }

  private getTarget(): PlayerName {
    if (this.name === PlayerName.BATMAN) {
      return PlayerName.JOKER;
    } else {
      return PlayerName.BATMAN;
    }
  }

}

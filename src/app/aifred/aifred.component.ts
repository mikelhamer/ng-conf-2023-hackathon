import {Component, inject, OnDestroy, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Subscription} from 'rxjs';
import {GameService} from '../core/game.service';
import {AttackType, PlayerName} from '../core/action';

@Component({
  selector: 'app-aifred',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aifred.component.html',
  styleUrls: ['./aifred.component.scss']
})
export class AifredComponent implements OnInit, OnDestroy {

  quip = signal('');
  actionSubscription = new Subscription();
  gameService: GameService = inject(GameService);

  ngOnInit(): void {
    this.actionSubscription = this.gameService.onAction(action => {
      if (action.sourcePlayer === PlayerName.BATMAN) {
        if (action.attack?.type === AttackType.PHYSICAL) {
          this.quip.set(`Looks like Joker's getting a taste of Bat-fist-ic justice!`);
        } else if (action.attack?.type === AttackType.MAGIC) {
          this.quip.set(`Watch out, Joker! It's Bat-a-rang time! Catch and release`);
        } else if (action.gameOver) {
          this.quip.set(`Even the Dark Knight needs a breather. Batman's taking a strategic timeout!`)
        }
      } else if (action.sourcePlayer === PlayerName.JOKER) {
        if (action.attack?.type === AttackType.PHYSICAL) {
          this.quip.set(`Ouch! Batman just got a lesson in clown-whackery!`);
        } else if (action.attack?.type === AttackType.MAGIC) {
          this.quip.set(`Zap! Looks like Joker's shocking sense of humor just got a jolt of justice!`);
        } else if (action.gameOver) {
          this.quip.set(`Seems like the clown prince of chaos just couldn't keep up with Batman's Bat-skills! Game over, Joker!!`)
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.actionSubscription.unsubscribe();
  }


}

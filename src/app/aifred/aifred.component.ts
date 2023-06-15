import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { GameService } from '../core/game.service';

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
    this.actionSubscription = this.gameService.action$.subscribe(action => {
      this.quip.set(action);
    });
  }

  ngOnDestroy(): void {
    this.actionSubscription.unsubscribe();
  }


}

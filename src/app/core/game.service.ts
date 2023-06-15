import {Injectable} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {Action} from './action';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _action$ = new Subject<Action>

  constructor() {
  }

  performAction(action: Action) {
    this._action$.next(action);
  }

  onAction(callback: (action: Action) => void): Subscription {
    return this._action$.subscribe(callback);
  }

}

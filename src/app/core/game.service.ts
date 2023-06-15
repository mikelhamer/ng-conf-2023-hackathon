import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _action$ =  new Observable<string>

  constructor() { }

  get action$(): Observable<string> {
    return this.action$;
  }

}

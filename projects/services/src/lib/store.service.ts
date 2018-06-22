import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ServicesModule} from './services.module';
import { Store } from '@ngrx/store';

import { INCREMENT, DECREMENT, RESET } from './counter';

export interface AppState {
  count: number;
}

@Injectable({
  providedIn: ServicesModule
})
export class StoreService {
  counter: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter = store.select('counter');
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }
}

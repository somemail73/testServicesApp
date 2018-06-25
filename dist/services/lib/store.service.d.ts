import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
export interface AppState {
    count: number;
}
export declare class StoreService {
    private store;
    counter: Observable<number>;
    constructor(store: Store<AppState>);
    increment(): void;
    decrement(): void;
    reset(): void;
}

import { Action } from '@ngrx/store';
export declare const INCREMENT = "INCREMENT";
export declare const DECREMENT = "DECREMENT";
export declare const RESET = "RESET";
export declare function counterReducer(state: number, action: Action): number;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ServicesModule } from './services.module';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './counter';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "./services.module";
/**
 * @record
 */
export function AppState() { }
function AppState_tsickle_Closure_declarations() {
    /** @type {?} */
    AppState.prototype.count;
}
export class StoreService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.counter = store.select('counter');
    }
    /**
     * @return {?}
     */
    increment() {
        this.store.dispatch({ type: INCREMENT });
    }
    /**
     * @return {?}
     */
    decrement() {
        this.store.dispatch({ type: DECREMENT });
    }
    /**
     * @return {?}
     */
    reset() {
        this.store.dispatch({ type: RESET });
    }
}
StoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: ServicesModule
            },] },
];
/** @nocollapse */
StoreService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ StoreService.ngInjectableDef = i0.defineInjectable({ factory: function StoreService_Factory() { return new StoreService(i0.inject(i1.Store)); }, token: StoreService, providedIn: i2.ServicesModule });
function StoreService_tsickle_Closure_declarations() {
    /** @type {?} */
    StoreService.prototype.counter;
    /** @type {?} */
    StoreService.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NvbWVtYWlsNzMtdGVzdC1zZXJ2aWNlcy8iLCJzb3VyY2VzIjpbImxpYi9zdG9yZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7O0FBU3hELE1BQU07Ozs7SUFHSixZQUFvQixLQUFzQjtRQUF0QixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDeEM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztLQUMxQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0tBQzFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDdEM7OztZQXBCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLGNBQWM7YUFDM0I7Ozs7WUFWUSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7U2VydmljZXNNb2R1bGV9IGZyb20gJy4vc2VydmljZXMubW9kdWxlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBJTkNSRU1FTlQsIERFQ1JFTUVOVCwgUkVTRVQgfSBmcm9tICcuL2NvdW50ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlIHtcbiAgY291bnQ6IG51bWJlcjtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBTZXJ2aWNlc01vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZVNlcnZpY2Uge1xuICBjb3VudGVyOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XG4gICAgdGhpcy5jb3VudGVyID0gc3RvcmUuc2VsZWN0KCdjb3VudGVyJyk7XG4gIH1cblxuICBpbmNyZW1lbnQoKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6IElOQ1JFTUVOVCB9KTtcbiAgfVxuXG4gIGRlY3JlbWVudCgpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHsgdHlwZTogREVDUkVNRU5UIH0pO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFJFU0VUIH0pO1xuICB9XG59XG4iXX0=
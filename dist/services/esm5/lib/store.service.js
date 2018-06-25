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
var StoreService = /** @class */ (function () {
    function StoreService(store) {
        this.store = store;
        this.counter = store.select('counter');
    }
    /**
     * @return {?}
     */
    StoreService.prototype.increment = /**
     * @return {?}
     */
    function () {
        this.store.dispatch({ type: INCREMENT });
    };
    /**
     * @return {?}
     */
    StoreService.prototype.decrement = /**
     * @return {?}
     */
    function () {
        this.store.dispatch({ type: DECREMENT });
    };
    /**
     * @return {?}
     */
    StoreService.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.store.dispatch({ type: RESET });
    };
    StoreService.decorators = [
        { type: Injectable, args: [{
                    providedIn: ServicesModule
                },] },
    ];
    /** @nocollapse */
    StoreService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ StoreService.ngInjectableDef = i0.defineInjectable({ factory: function StoreService_Factory() { return new StoreService(i0.inject(i1.Store)); }, token: StoreService, providedIn: i2.ServicesModule });
    return StoreService;
}());
export { StoreService };
function StoreService_tsickle_Closure_declarations() {
    /** @type {?} */
    StoreService.prototype.counter;
    /** @type {?} */
    StoreService.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NvbWVtYWlsNzMtdGVzdC1zZXJ2aWNlcy8iLCJzb3VyY2VzIjpbImxpYi9zdG9yZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7OztJQVl0RCxzQkFBb0IsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3hDOzs7O0lBRUQsZ0NBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztLQUMxQzs7OztJQUVELGdDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7S0FDMUM7Ozs7SUFFRCw0QkFBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQ3RDOztnQkFwQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxjQUFjO2lCQUMzQjs7OztnQkFWUSxLQUFLOzs7dUJBSGQ7O1NBY2EsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1NlcnZpY2VzTW9kdWxlfSBmcm9tICcuL3NlcnZpY2VzLm1vZHVsZSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgSU5DUkVNRU5ULCBERUNSRU1FTlQsIFJFU0VUIH0gZnJvbSAnLi9jb3VudGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogU2VydmljZXNNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVTZXJ2aWNlIHtcbiAgY291bnRlcjogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xuICAgIHRoaXMuY291bnRlciA9IHN0b3JlLnNlbGVjdCgnY291bnRlcicpO1xuICB9XG5cbiAgaW5jcmVtZW50KCkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBJTkNSRU1FTlQgfSk7XG4gIH1cblxuICBkZWNyZW1lbnQoKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6IERFQ1JFTUVOVCB9KTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBSRVNFVCB9KTtcbiAgfVxufVxuIl19
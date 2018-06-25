import { Injectable, NgModule, defineInjectable, inject } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DependentService = /** @class */ (function () {
    function DependentService() {
        console.log('DependentService');
    }
    DependentService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DependentService.ctorParameters = function () { return []; };
    return DependentService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ServiceWithConfiguredParam = /** @class */ (function () {
    function ServiceWithConfiguredParam(configParam, dependentService) {
        this.configParam = configParam;
        this.testProperty = 0;
        console.log(configParam);
        console.log(dependentService);
    }
    /**
     * @return {?}
     */
    ServiceWithConfiguredParam.prototype.testConfiguration = /**
     * @return {?}
     */
    function () {
        console.log(this.testProperty);
        this.testProperty += 1;
        console.log(this.configParam);
    };
    ServiceWithConfiguredParam.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ServiceWithConfiguredParam.ctorParameters = function () { return [
        { type: undefined },
        { type: DependentService }
    ]; };
    return ServiceWithConfiguredParam;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ INCREMENT = 'INCREMENT';
var /** @type {?} */ DECREMENT = 'DECREMENT';
var /** @type {?} */ RESET = 'RESET';
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function counterReducer(state, action) {
    if (state === void 0) { state = 0; }
    switch (action.type) {
        case INCREMENT:
            console.log(state);
            return state + 1;
        case DECREMENT:
            return state - 1;
        case RESET:
            return 0;
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    /**
     * @param {?} param
     * @return {?}
     */
    ServicesModule.forRoot = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        /**
         * @param {?} configParam
         * @return {?}
         */
        function provideMyService(configParam) {
            return {
                provide: ServiceWithConfiguredParam,
                useFactory: function (servicesTwoService) { return new ServiceWithConfiguredParam(configParam, servicesTwoService); },
                deps: [DependentService]
            };
        }
        return {
            ngModule: ServicesModule,
            providers: [
                provideMyService(param)
            ]
        };
    };
    /**
     * @param {?} param
     * @return {?}
     */
    ServicesModule.forFeature = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        /**
         * @param {?} configParam
         * @return {?}
         */
        function provideMyService(configParam) {
            return {
                provide: ServiceWithConfiguredParam,
                useFactory: function (servicesTwoService) { return new ServiceWithConfiguredParam(configParam, servicesTwoService); },
                deps: [DependentService]
            };
        }
        return {
            ngModule: ServicesModule,
            providers: [
                provideMyService(param)
            ]
        };
    };
    /**
     * @param {?} param
     * @return {?}
     */
    ServicesModule.forTheHorde = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        /**
         * @param {?} configParam
         * @return {?}
         */
        function provideMyService(configParam) {
            return {
                provide: ServiceWithConfiguredParam,
                useFactory: function (servicesTwoService) { return new ServiceWithConfiguredParam(configParam, servicesTwoService); },
                deps: [DependentService]
            };
        }
        return {
            ngModule: ServicesModule,
            providers: [
                provideMyService(param)
            ]
        };
    };
    ServicesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        // BrowserModule,
                        StoreModule.forRoot({ count: counterReducer })
                    ],
                    providers: [
                        DependentService,
                    ],
                    exports: []
                },] },
    ];
    return ServicesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
    /** @nocollapse */ StoreService.ngInjectableDef = defineInjectable({ factory: function StoreService_Factory() { return new StoreService(inject(Store)); }, token: StoreService, providedIn: ServicesModule });
    return StoreService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ServiceWithConfiguredParam, StoreService, ServicesModule, counterReducer as ɵb, DependentService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29tZW1haWw3My10ZXN0LXNlcnZpY2VzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9zb21lbWFpbDczLXRlc3Qtc2VydmljZXMvbGliL2RlcGVuZGVudFNlcnZpY2Uuc2VydmljZS50cyIsIm5nOi8vc29tZW1haWw3My10ZXN0LXNlcnZpY2VzL2xpYi9zZXJ2aWNlV2l0aENvbmZpZ3VyZWRQYXJhbS5zZXJ2aWNlLnRzIiwibmc6Ly9zb21lbWFpbDczLXRlc3Qtc2VydmljZXMvbGliL2NvdW50ZXIudHMiLCJuZzovL3NvbWVtYWlsNzMtdGVzdC1zZXJ2aWNlcy9saWIvc2VydmljZXMubW9kdWxlLnRzIiwibmc6Ly9zb21lbWFpbDczLXRlc3Qtc2VydmljZXMvbGliL3N0b3JlLnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTZXJ2aWNlc01vZHVsZX0gZnJvbSAnLi9zZXJ2aWNlcy5tb2R1bGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVwZW5kZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdEZXBlbmRlbnRTZXJ2aWNlJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2VydmljZXNNb2R1bGV9IGZyb20gJy4vc2VydmljZXMubW9kdWxlJztcbmltcG9ydCB7RGVwZW5kZW50U2VydmljZX0gZnJvbSAnLi9kZXBlbmRlbnRTZXJ2aWNlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VydmljZVdpdGhDb25maWd1cmVkUGFyYW0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1BhcmFtOiBhbnksIGRlcGVuZGVudFNlcnZpY2U6IERlcGVuZGVudFNlcnZpY2UpIHtcbiAgICBjb25zb2xlLmxvZyhjb25maWdQYXJhbSk7XG4gICAgY29uc29sZS5sb2coZGVwZW5kZW50U2VydmljZSk7XG4gIH1cblxuICB0ZXN0UHJvcGVydHkgPSAwO1xuXG4gIHRlc3RDb25maWd1cmF0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMudGVzdFByb3BlcnR5KTtcbiAgICB0aGlzLnRlc3RQcm9wZXJ0eSArPSAxO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY29uZmlnUGFyYW0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBJTkNSRU1FTlQgPSAnSU5DUkVNRU5UJztcbmV4cG9ydCBjb25zdCBERUNSRU1FTlQgPSAnREVDUkVNRU5UJztcbmV4cG9ydCBjb25zdCBSRVNFVCA9ICdSRVNFVCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3VudGVyUmVkdWNlcihzdGF0ZTogbnVtYmVyID0gMCwgYWN0aW9uOiBBY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSU5DUkVNRU5UOlxuICAgICAgY29uc29sZS5sb2coc3RhdGUpO1xuXG4gICAgICByZXR1cm4gc3RhdGUgKyAxO1xuXG4gICAgY2FzZSBERUNSRU1FTlQ6XG4gICAgICByZXR1cm4gc3RhdGUgLSAxO1xuXG4gICAgY2FzZSBSRVNFVDpcbiAgICAgIHJldHVybiAwO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge1N0b3JlTW9kdWxlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge2NvdW50ZXJSZWR1Y2VyfSBmcm9tICcuL2NvdW50ZXInO1xuaW1wb3J0IHtTZXJ2aWNlV2l0aENvbmZpZ3VyZWRQYXJhbX0gZnJvbSAnLi9zZXJ2aWNlV2l0aENvbmZpZ3VyZWRQYXJhbS5zZXJ2aWNlJztcbmltcG9ydCB7RGVwZW5kZW50U2VydmljZX0gZnJvbSAnLi9kZXBlbmRlbnRTZXJ2aWNlLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgLy8gQnJvd3Nlck1vZHVsZSxcbiAgICBTdG9yZU1vZHVsZS5mb3JSb290KHsgY291bnQ6IGNvdW50ZXJSZWR1Y2VyIH0pXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIERlcGVuZGVudFNlcnZpY2UsXG4gICAgLy8gU2VydmljZVdpdGhDb25maWd1cmVkUGFyYW0sXG4gIF0sXG4gIGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VzTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QocGFyYW06IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIGZ1bmN0aW9uIHByb3ZpZGVNeVNlcnZpY2UoY29uZmlnUGFyYW06IHN0cmluZykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJvdmlkZTogU2VydmljZVdpdGhDb25maWd1cmVkUGFyYW0sXG4gICAgICAgIHVzZUZhY3Rvcnk6IChzZXJ2aWNlc1R3b1NlcnZpY2U6IERlcGVuZGVudFNlcnZpY2UpID0+IG5ldyBTZXJ2aWNlV2l0aENvbmZpZ3VyZWRQYXJhbShjb25maWdQYXJhbSwgc2VydmljZXNUd29TZXJ2aWNlKSxcbiAgICAgICAgZGVwczogW0RlcGVuZGVudFNlcnZpY2VdXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2VydmljZXNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgcHJvdmlkZU15U2VydmljZShwYXJhbSlcbiAgICAgIF1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckZlYXR1cmUocGFyYW06IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIGZ1bmN0aW9uIHByb3ZpZGVNeVNlcnZpY2UoY29uZmlnUGFyYW06IHN0cmluZykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJvdmlkZTogU2VydmljZVdpdGhDb25maWd1cmVkUGFyYW0sXG4gICAgICAgIHVzZUZhY3Rvcnk6IChzZXJ2aWNlc1R3b1NlcnZpY2U6IERlcGVuZGVudFNlcnZpY2UpID0+IG5ldyBTZXJ2aWNlV2l0aENvbmZpZ3VyZWRQYXJhbShjb25maWdQYXJhbSwgc2VydmljZXNUd29TZXJ2aWNlKSxcbiAgICAgICAgZGVwczogW0RlcGVuZGVudFNlcnZpY2VdXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2VydmljZXNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgcHJvdmlkZU15U2VydmljZShwYXJhbSlcbiAgICAgIF1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvclRoZUhvcmRlKHBhcmFtOiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICBmdW5jdGlvbiBwcm92aWRlTXlTZXJ2aWNlKGNvbmZpZ1BhcmFtOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb3ZpZGU6IFNlcnZpY2VXaXRoQ29uZmlndXJlZFBhcmFtLFxuICAgICAgICB1c2VGYWN0b3J5OiAoc2VydmljZXNUd29TZXJ2aWNlOiBEZXBlbmRlbnRTZXJ2aWNlKSA9PiBuZXcgU2VydmljZVdpdGhDb25maWd1cmVkUGFyYW0oY29uZmlnUGFyYW0sIHNlcnZpY2VzVHdvU2VydmljZSksXG4gICAgICAgIGRlcHM6IFtEZXBlbmRlbnRTZXJ2aWNlXVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNlcnZpY2VzTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHByb3ZpZGVNeVNlcnZpY2UocGFyYW0pXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7U2VydmljZXNNb2R1bGV9IGZyb20gJy4vc2VydmljZXMubW9kdWxlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBJTkNSRU1FTlQsIERFQ1JFTUVOVCwgUkVTRVQgfSBmcm9tICcuL2NvdW50ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlIHtcbiAgY291bnQ6IG51bWJlcjtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBTZXJ2aWNlc01vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZVNlcnZpY2Uge1xuICBjb3VudGVyOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XG4gICAgdGhpcy5jb3VudGVyID0gc3RvcmUuc2VsZWN0KCdjb3VudGVyJyk7XG4gIH1cblxuICBpbmNyZW1lbnQoKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6IElOQ1JFTUVOVCB9KTtcbiAgfVxuXG4gIGRlY3JlbWVudCgpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHsgdHlwZTogREVDUkVNRU5UIH0pO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFJFU0VUIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBS0U7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FDakM7O2dCQUpGLFVBQVU7Ozs7MkJBSFg7Ozs7Ozs7QUNBQTtJQU1FLG9DQUFvQixXQUFnQixFQUFFLGdCQUFrQztRQUFwRCxnQkFBVyxHQUFYLFdBQVcsQ0FBSzs0QkFLckIsQ0FBQztRQUpkLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0tBQy9COzs7O0lBSUQsc0RBQWlCOzs7SUFBakI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUMvQjs7Z0JBYkYsVUFBVTs7Ozs7Z0JBRkgsZ0JBQWdCOztxQ0FGeEI7Ozs7Ozs7QUNFQSxBQUFPLHFCQUFNLFNBQVMsR0FBRyxXQUFXLENBQUM7QUFDckMsQUFBTyxxQkFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDO0FBQ3JDLEFBQU8scUJBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQzs7Ozs7O0FBRTdCLHdCQUErQixLQUFpQixFQUFFLE1BQWM7SUFBakMsc0JBQUEsRUFBQSxTQUFpQjtJQUM5QyxRQUFRLE1BQU0sQ0FBQyxJQUFJO1FBQ2pCLEtBQUssU0FBUztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFbkIsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLEtBQUssU0FBUztZQUNaLE9BQU8sS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVuQixLQUFLLEtBQUs7WUFDUixPQUFPLENBQUMsQ0FBQztRQUVYO1lBQ0UsT0FBTyxLQUFLLENBQUM7S0FDaEI7Q0FDRjs7Ozs7O0FDdEJEOzs7Ozs7O0lBbUJTLHNCQUFPOzs7O0lBQWQsVUFBZSxLQUFhOzs7OztRQUMxQiwwQkFBMEIsV0FBbUI7WUFDM0MsT0FBTztnQkFDTCxPQUFPLEVBQUUsMEJBQTBCO2dCQUNuQyxVQUFVLEVBQUUsVUFBQyxrQkFBb0MsSUFBSyxPQUFBLElBQUksMEJBQTBCLENBQUMsV0FBVyxFQUFFLGtCQUFrQixDQUFDLEdBQUE7Z0JBQ3JILElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQ3pCLENBQUM7U0FDSDtRQUVELE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ3hCO1NBQ0YsQ0FBQztLQUNIOzs7OztJQUVNLHlCQUFVOzs7O0lBQWpCLFVBQWtCLEtBQWE7Ozs7O1FBQzdCLDBCQUEwQixXQUFtQjtZQUMzQyxPQUFPO2dCQUNMLE9BQU8sRUFBRSwwQkFBMEI7Z0JBQ25DLFVBQVUsRUFBRSxVQUFDLGtCQUFvQyxJQUFLLE9BQUEsSUFBSSwwQkFBMEIsQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLENBQUMsR0FBQTtnQkFDckgsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDekIsQ0FBQztTQUNIO1FBRUQsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVCxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDeEI7U0FDRixDQUFDO0tBQ0g7Ozs7O0lBRU0sMEJBQVc7Ozs7SUFBbEIsVUFBbUIsS0FBYTs7Ozs7UUFDOUIsMEJBQTBCLFdBQW1CO1lBQzNDLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLDBCQUEwQjtnQkFDbkMsVUFBVSxFQUFFLFVBQUMsa0JBQW9DLElBQUssT0FBQSxJQUFJLDBCQUEwQixDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxHQUFBO2dCQUNySCxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUN6QixDQUFDO1NBQ0g7UUFFRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUN4QjtTQUNGLENBQUM7S0FDSDs7Z0JBN0RGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7O3dCQUVQLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLENBQUM7cUJBQy9DO29CQUNELFNBQVMsRUFBRTt3QkFDVCxnQkFBZ0I7cUJBRWpCO29CQUNELE9BQU8sRUFBRSxFQUFFO2lCQUNaOzt5QkFqQkQ7Ozs7Ozs7QUNBQTtJQWlCRSxzQkFBb0IsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3hDOzs7O0lBRUQsZ0NBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztLQUMxQzs7OztJQUVELGdDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7S0FDMUM7Ozs7SUFFRCw0QkFBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQ3RDOztnQkFwQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxjQUFjO2lCQUMzQjs7OztnQkFWUSxLQUFLOzs7dUJBSGQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==
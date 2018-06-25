(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngrx/store')) :
    typeof define === 'function' && define.amd ? define('somemail73-test-services', ['exports', '@angular/core', '@ngrx/store'], factory) :
    (factory((global['somemail73-test-services'] = {}),global.ng.core,null));
}(this, (function (exports,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DependentService = (function () {
        function DependentService() {
            console.log('DependentService');
        }
        DependentService.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        DependentService.ctorParameters = function () { return []; };
        return DependentService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ServiceWithConfiguredParam = (function () {
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
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        ServiceWithConfiguredParam.ctorParameters = function () {
            return [
                { type: undefined },
                { type: DependentService }
            ];
        };
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
        if (state === void 0) {
            state = 0;
        }
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
    var ServicesModule = (function () {
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
            { type: i0.NgModule, args: [{
                        imports: [
                            // BrowserModule,
                            i1.StoreModule.forRoot({ count: counterReducer })
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
    var StoreService = (function () {
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
            { type: i0.Injectable, args: [{
                        providedIn: ServicesModule
                    },] },
        ];
        /** @nocollapse */
        StoreService.ctorParameters = function () {
            return [
                { type: i1.Store }
            ];
        };
        /** @nocollapse */ StoreService.ngInjectableDef = i0.defineInjectable({ factory: function StoreService_Factory() { return new StoreService(i0.inject(i1.Store)); }, token: StoreService, providedIn: ServicesModule });
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

    exports.ServiceWithConfiguredParam = ServiceWithConfiguredParam;
    exports.StoreService = StoreService;
    exports.ServicesModule = ServicesModule;
    exports.ɵb = counterReducer;
    exports.ɵa = DependentService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29tZW1haWw3My10ZXN0LXNlcnZpY2VzLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vc29tZW1haWw3My10ZXN0LXNlcnZpY2VzL2xpYi9kZXBlbmRlbnRTZXJ2aWNlLnNlcnZpY2UudHMiLCJuZzovL3NvbWVtYWlsNzMtdGVzdC1zZXJ2aWNlcy9saWIvc2VydmljZVdpdGhDb25maWd1cmVkUGFyYW0uc2VydmljZS50cyIsIm5nOi8vc29tZW1haWw3My10ZXN0LXNlcnZpY2VzL2xpYi9jb3VudGVyLnRzIiwibmc6Ly9zb21lbWFpbDczLXRlc3Qtc2VydmljZXMvbGliL3NlcnZpY2VzLm1vZHVsZS50cyIsIm5nOi8vc29tZW1haWw3My10ZXN0LXNlcnZpY2VzL2xpYi9zdG9yZS5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2VydmljZXNNb2R1bGV9IGZyb20gJy4vc2VydmljZXMubW9kdWxlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERlcGVuZGVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZygnRGVwZW5kZW50U2VydmljZScpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NlcnZpY2VzTW9kdWxlfSBmcm9tICcuL3NlcnZpY2VzLm1vZHVsZSc7XG5pbXBvcnQge0RlcGVuZGVudFNlcnZpY2V9IGZyb20gJy4vZGVwZW5kZW50U2VydmljZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VXaXRoQ29uZmlndXJlZFBhcmFtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdQYXJhbTogYW55LCBkZXBlbmRlbnRTZXJ2aWNlOiBEZXBlbmRlbnRTZXJ2aWNlKSB7XG4gICAgY29uc29sZS5sb2coY29uZmlnUGFyYW0pO1xuICAgIGNvbnNvbGUubG9nKGRlcGVuZGVudFNlcnZpY2UpO1xuICB9XG5cbiAgdGVzdFByb3BlcnR5ID0gMDtcblxuICB0ZXN0Q29uZmlndXJhdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRlc3RQcm9wZXJ0eSk7XG4gICAgdGhpcy50ZXN0UHJvcGVydHkgKz0gMTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbmZpZ1BhcmFtKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgSU5DUkVNRU5UID0gJ0lOQ1JFTUVOVCc7XG5leHBvcnQgY29uc3QgREVDUkVNRU5UID0gJ0RFQ1JFTUVOVCc7XG5leHBvcnQgY29uc3QgUkVTRVQgPSAnUkVTRVQnO1xuXG5leHBvcnQgZnVuY3Rpb24gY291bnRlclJlZHVjZXIoc3RhdGU6IG51bWJlciA9IDAsIGFjdGlvbjogQWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIElOQ1JFTUVOVDpcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcblxuICAgICAgcmV0dXJuIHN0YXRlICsgMTtcblxuICAgIGNhc2UgREVDUkVNRU5UOlxuICAgICAgcmV0dXJuIHN0YXRlIC0gMTtcblxuICAgIGNhc2UgUkVTRVQ6XG4gICAgICByZXR1cm4gMDtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtTdG9yZU1vZHVsZX0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtjb3VudGVyUmVkdWNlcn0gZnJvbSAnLi9jb3VudGVyJztcbmltcG9ydCB7U2VydmljZVdpdGhDb25maWd1cmVkUGFyYW19IGZyb20gJy4vc2VydmljZVdpdGhDb25maWd1cmVkUGFyYW0uc2VydmljZSc7XG5pbXBvcnQge0RlcGVuZGVudFNlcnZpY2V9IGZyb20gJy4vZGVwZW5kZW50U2VydmljZS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIC8vIEJyb3dzZXJNb2R1bGUsXG4gICAgU3RvcmVNb2R1bGUuZm9yUm9vdCh7IGNvdW50OiBjb3VudGVyUmVkdWNlciB9KVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBEZXBlbmRlbnRTZXJ2aWNlLFxuICAgIC8vIFNlcnZpY2VXaXRoQ29uZmlndXJlZFBhcmFtLFxuICBdLFxuICBleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KHBhcmFtOiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICBmdW5jdGlvbiBwcm92aWRlTXlTZXJ2aWNlKGNvbmZpZ1BhcmFtOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb3ZpZGU6IFNlcnZpY2VXaXRoQ29uZmlndXJlZFBhcmFtLFxuICAgICAgICB1c2VGYWN0b3J5OiAoc2VydmljZXNUd29TZXJ2aWNlOiBEZXBlbmRlbnRTZXJ2aWNlKSA9PiBuZXcgU2VydmljZVdpdGhDb25maWd1cmVkUGFyYW0oY29uZmlnUGFyYW0sIHNlcnZpY2VzVHdvU2VydmljZSksXG4gICAgICAgIGRlcHM6IFtEZXBlbmRlbnRTZXJ2aWNlXVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNlcnZpY2VzTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHByb3ZpZGVNeVNlcnZpY2UocGFyYW0pXG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JGZWF0dXJlKHBhcmFtOiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICBmdW5jdGlvbiBwcm92aWRlTXlTZXJ2aWNlKGNvbmZpZ1BhcmFtOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb3ZpZGU6IFNlcnZpY2VXaXRoQ29uZmlndXJlZFBhcmFtLFxuICAgICAgICB1c2VGYWN0b3J5OiAoc2VydmljZXNUd29TZXJ2aWNlOiBEZXBlbmRlbnRTZXJ2aWNlKSA9PiBuZXcgU2VydmljZVdpdGhDb25maWd1cmVkUGFyYW0oY29uZmlnUGFyYW0sIHNlcnZpY2VzVHdvU2VydmljZSksXG4gICAgICAgIGRlcHM6IFtEZXBlbmRlbnRTZXJ2aWNlXVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNlcnZpY2VzTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHByb3ZpZGVNeVNlcnZpY2UocGFyYW0pXG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JUaGVIb3JkZShwYXJhbTogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgZnVuY3Rpb24gcHJvdmlkZU15U2VydmljZShjb25maWdQYXJhbTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm92aWRlOiBTZXJ2aWNlV2l0aENvbmZpZ3VyZWRQYXJhbSxcbiAgICAgICAgdXNlRmFjdG9yeTogKHNlcnZpY2VzVHdvU2VydmljZTogRGVwZW5kZW50U2VydmljZSkgPT4gbmV3IFNlcnZpY2VXaXRoQ29uZmlndXJlZFBhcmFtKGNvbmZpZ1BhcmFtLCBzZXJ2aWNlc1R3b1NlcnZpY2UpLFxuICAgICAgICBkZXBzOiBbRGVwZW5kZW50U2VydmljZV1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTZXJ2aWNlc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBwcm92aWRlTXlTZXJ2aWNlKHBhcmFtKVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1NlcnZpY2VzTW9kdWxlfSBmcm9tICcuL3NlcnZpY2VzLm1vZHVsZSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgSU5DUkVNRU5ULCBERUNSRU1FTlQsIFJFU0VUIH0gZnJvbSAnLi9jb3VudGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogU2VydmljZXNNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVTZXJ2aWNlIHtcbiAgY291bnRlcjogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xuICAgIHRoaXMuY291bnRlciA9IHN0b3JlLnNlbGVjdCgnY291bnRlcicpO1xuICB9XG5cbiAgaW5jcmVtZW50KCkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBJTkNSRU1FTlQgfSk7XG4gIH1cblxuICBkZWNyZW1lbnQoKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6IERFQ1JFTUVOVCB9KTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBSRVNFVCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJOZ01vZHVsZSIsIlN0b3JlTW9kdWxlIiwiU3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQUtFO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ2pDOztvQkFKRkEsYUFBVTs7OzsrQkFIWDs7Ozs7OztBQ0FBO1FBTUUsb0NBQW9C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
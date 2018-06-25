/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter';
import { ServiceWithConfiguredParam } from './serviceWithConfiguredParam.service';
import { DependentService } from './dependentService.service';
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
export { ServicesModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc29tZW1haWw3My10ZXN0LXNlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ3pDLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7OztJQWNuRCxzQkFBTzs7OztJQUFkLFVBQWUsS0FBYTs7Ozs7UUFDMUIsMEJBQTBCLFdBQW1CO1lBQzNDLE1BQU0sQ0FBQztnQkFDTCxPQUFPLEVBQUUsMEJBQTBCO2dCQUNuQyxVQUFVLEVBQUUsVUFBQyxrQkFBb0MsSUFBSyxPQUFBLElBQUksMEJBQTBCLENBQUMsV0FBVyxFQUFFLGtCQUFrQixDQUFDLEVBQS9ELENBQStEO2dCQUNySCxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUN6QixDQUFDO1NBQ0g7UUFFRCxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ3hCO1NBQ0YsQ0FBQztLQUNIOzs7OztJQUVNLHlCQUFVOzs7O0lBQWpCLFVBQWtCLEtBQWE7Ozs7O1FBQzdCLDBCQUEwQixXQUFtQjtZQUMzQyxNQUFNLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLDBCQUEwQjtnQkFDbkMsVUFBVSxFQUFFLFVBQUMsa0JBQW9DLElBQUssT0FBQSxJQUFJLDBCQUEwQixDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxFQUEvRCxDQUErRDtnQkFDckgsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDekIsQ0FBQztTQUNIO1FBRUQsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUN4QjtTQUNGLENBQUM7S0FDSDs7Ozs7SUFFTSwwQkFBVzs7OztJQUFsQixVQUFtQixLQUFhOzs7OztRQUM5QiwwQkFBMEIsV0FBbUI7WUFDM0MsTUFBTSxDQUFDO2dCQUNMLE9BQU8sRUFBRSwwQkFBMEI7Z0JBQ25DLFVBQVUsRUFBRSxVQUFDLGtCQUFvQyxJQUFLLE9BQUEsSUFBSSwwQkFBMEIsQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLENBQUMsRUFBL0QsQ0FBK0Q7Z0JBQ3JILElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQ3pCLENBQUM7U0FDSDtRQUVELE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVCxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDeEI7U0FDRixDQUFDO0tBQ0g7O2dCQTdERixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFOzt3QkFFUCxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxDQUFDO3FCQUMvQztvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsZ0JBQWdCO3FCQUVqQjtvQkFDRCxPQUFPLEVBQUUsRUFBRTtpQkFDWjs7eUJBakJEOztTQWtCYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge1N0b3JlTW9kdWxlfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge2NvdW50ZXJSZWR1Y2VyfSBmcm9tICcuL2NvdW50ZXInO1xuaW1wb3J0IHtTZXJ2aWNlV2l0aENvbmZpZ3VyZWRQYXJhbX0gZnJvbSAnLi9zZXJ2aWNlV2l0aENvbmZpZ3VyZWRQYXJhbS5zZXJ2aWNlJztcbmltcG9ydCB7RGVwZW5kZW50U2VydmljZX0gZnJvbSAnLi9kZXBlbmRlbnRTZXJ2aWNlLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgLy8gQnJvd3Nlck1vZHVsZSxcbiAgICBTdG9yZU1vZHVsZS5mb3JSb290KHsgY291bnQ6IGNvdW50ZXJSZWR1Y2VyIH0pXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIERlcGVuZGVudFNlcnZpY2UsXG4gICAgLy8gU2VydmljZVdpdGhDb25maWd1cmVkUGFyYW0sXG4gIF0sXG4gIGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VzTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QocGFyYW06IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIGZ1bmN0aW9uIHByb3ZpZGVNeVNlcnZpY2UoY29uZmlnUGFyYW06IHN0cmluZykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJvdmlkZTogU2VydmljZVdpdGhDb25maWd1cmVkUGFyYW0sXG4gICAgICAgIHVzZUZhY3Rvcnk6IChzZXJ2aWNlc1R3b1NlcnZpY2U6IERlcGVuZGVudFNlcnZpY2UpID0+IG5ldyBTZXJ2aWNlV2l0aENvbmZpZ3VyZWRQYXJhbShjb25maWdQYXJhbSwgc2VydmljZXNUd29TZXJ2aWNlKSxcbiAgICAgICAgZGVwczogW0RlcGVuZGVudFNlcnZpY2VdXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2VydmljZXNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgcHJvdmlkZU15U2VydmljZShwYXJhbSlcbiAgICAgIF1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckZlYXR1cmUocGFyYW06IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIGZ1bmN0aW9uIHByb3ZpZGVNeVNlcnZpY2UoY29uZmlnUGFyYW06IHN0cmluZykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJvdmlkZTogU2VydmljZVdpdGhDb25maWd1cmVkUGFyYW0sXG4gICAgICAgIHVzZUZhY3Rvcnk6IChzZXJ2aWNlc1R3b1NlcnZpY2U6IERlcGVuZGVudFNlcnZpY2UpID0+IG5ldyBTZXJ2aWNlV2l0aENvbmZpZ3VyZWRQYXJhbShjb25maWdQYXJhbSwgc2VydmljZXNUd29TZXJ2aWNlKSxcbiAgICAgICAgZGVwczogW0RlcGVuZGVudFNlcnZpY2VdXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2VydmljZXNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgcHJvdmlkZU15U2VydmljZShwYXJhbSlcbiAgICAgIF1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvclRoZUhvcmRlKHBhcmFtOiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICBmdW5jdGlvbiBwcm92aWRlTXlTZXJ2aWNlKGNvbmZpZ1BhcmFtOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb3ZpZGU6IFNlcnZpY2VXaXRoQ29uZmlndXJlZFBhcmFtLFxuICAgICAgICB1c2VGYWN0b3J5OiAoc2VydmljZXNUd29TZXJ2aWNlOiBEZXBlbmRlbnRTZXJ2aWNlKSA9PiBuZXcgU2VydmljZVdpdGhDb25maWd1cmVkUGFyYW0oY29uZmlnUGFyYW0sIHNlcnZpY2VzVHdvU2VydmljZSksXG4gICAgICAgIGRlcHM6IFtEZXBlbmRlbnRTZXJ2aWNlXVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNlcnZpY2VzTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHByb3ZpZGVNeVNlcnZpY2UocGFyYW0pXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19
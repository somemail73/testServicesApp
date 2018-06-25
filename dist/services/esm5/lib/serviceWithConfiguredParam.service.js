/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DependentService } from './dependentService.service';
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
export { ServiceWithConfiguredParam };
function ServiceWithConfiguredParam_tsickle_Closure_declarations() {
    /** @type {?} */
    ServiceWithConfiguredParam.prototype.testProperty;
    /** @type {?} */
    ServiceWithConfiguredParam.prototype.configParam;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZVdpdGhDb25maWd1cmVkUGFyYW0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NvbWVtYWlsNzMtdGVzdC1zZXJ2aWNlcy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlV2l0aENvbmZpZ3VyZWRQYXJhbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDOztJQUkxRCxvQ0FBb0IsV0FBZ0IsRUFBRSxnQkFBa0M7UUFBcEQsZ0JBQVcsR0FBWCxXQUFXLENBQUs7NEJBS3JCLENBQUM7UUFKZCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUMvQjs7OztJQUlELHNEQUFpQjs7O0lBQWpCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDL0I7O2dCQWJGLFVBQVU7Ozs7O2dCQUZILGdCQUFnQjs7cUNBRnhCOztTQUthLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2VydmljZXNNb2R1bGV9IGZyb20gJy4vc2VydmljZXMubW9kdWxlJztcbmltcG9ydCB7RGVwZW5kZW50U2VydmljZX0gZnJvbSAnLi9kZXBlbmRlbnRTZXJ2aWNlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VydmljZVdpdGhDb25maWd1cmVkUGFyYW0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1BhcmFtOiBhbnksIGRlcGVuZGVudFNlcnZpY2U6IERlcGVuZGVudFNlcnZpY2UpIHtcbiAgICBjb25zb2xlLmxvZyhjb25maWdQYXJhbSk7XG4gICAgY29uc29sZS5sb2coZGVwZW5kZW50U2VydmljZSk7XG4gIH1cblxuICB0ZXN0UHJvcGVydHkgPSAwO1xuXG4gIHRlc3RDb25maWd1cmF0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMudGVzdFByb3BlcnR5KTtcbiAgICB0aGlzLnRlc3RQcm9wZXJ0eSArPSAxO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY29uZmlnUGFyYW0pO1xuICB9XG59XG4iXX0=
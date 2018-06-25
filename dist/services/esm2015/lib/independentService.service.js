/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DependentService } from './dependentService.service';
export class IndependentServiceService {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        console.log('IndependentServiceService');
        console.log(service);
    }
}
IndependentServiceService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
IndependentServiceService.ctorParameters = () => [
    { type: DependentService }
];
function IndependentServiceService_tsickle_Closure_declarations() {
    /** @type {?} */
    IndependentServiceService.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXBlbmRlbnRTZXJ2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zb21lbWFpbDczLXRlc3Qtc2VydmljZXMvIiwic291cmNlcyI6WyJsaWIvaW5kZXBlbmRlbnRTZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFHNUQsTUFBTTs7OztJQUNKLFlBQW9CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3RCOzs7WUFMRixVQUFVOzs7O1lBRkgsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTZXJ2aWNlc01vZHVsZX0gZnJvbSAnLi9zZXJ2aWNlcy5tb2R1bGUnO1xuaW1wb3J0IHtEZXBlbmRlbnRTZXJ2aWNlfSBmcm9tICcuL2RlcGVuZGVudFNlcnZpY2Uuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbmRlcGVuZGVudFNlcnZpY2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBEZXBlbmRlbnRTZXJ2aWNlKSB7XG4gICAgY29uc29sZS5sb2coJ0luZGVwZW5kZW50U2VydmljZVNlcnZpY2UnKTtcbiAgICBjb25zb2xlLmxvZyhzZXJ2aWNlKTtcbiAgfVxufVxuIl19
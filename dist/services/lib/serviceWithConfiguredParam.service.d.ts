import { DependentService } from './dependentService.service';
export declare class ServiceWithConfiguredParam {
    private configParam;
    constructor(configParam: any, dependentService: DependentService);
    testProperty: number;
    testConfiguration(): void;
}

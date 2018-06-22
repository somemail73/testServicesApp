import { Injectable } from '@angular/core';
import {ServicesModule} from './services.module';
import {DependentService} from './dependentService.service';

@Injectable()
export class ServiceWithConfiguredParam {
  constructor(private configParam: any, dependentService: DependentService) {
    console.log(configParam);
    console.log(dependentService);
  }

  testConfiguration() {
    console.log(this.configParam);
  }
}

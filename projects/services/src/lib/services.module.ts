import { NgModule, ModuleWithProviders } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './counter';
import {ServiceWithConfiguredParam} from './serviceWithConfiguredParam.service';
import {DependentService} from './dependentService.service';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [
    DependentService
  ],
  exports: []
})
export class ServicesModule {
  static forRoot(param: string): ModuleWithProviders {
    function provideMyService(configParam: string) {
      return {
        provide: ServiceWithConfiguredParam,
        useFactory: (servicesTwoService: DependentService) => new ServiceWithConfiguredParam(configParam, servicesTwoService),
        deps: [DependentService]
      };
    }

    return {
      ngModule: ServicesModule,
      providers: [
        provideMyService(param)
      ]
    };
  }
}

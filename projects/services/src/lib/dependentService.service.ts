import { Injectable } from '@angular/core';
import {ServicesModule} from './services.module';

@Injectable()
export class DependentService {
  constructor() {
    console.log('DependentService');
  }
}

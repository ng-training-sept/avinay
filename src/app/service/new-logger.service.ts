import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable()
export class NewLoggerService implements Logger {

  log(): void {
    console.log('New Logger');
  }

}

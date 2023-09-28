import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable()
export class LoggerService implements Logger {

  log(): void {
    console.log('Legacy logger');
  }
}

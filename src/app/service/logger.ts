import { InjectionToken } from '@angular/core';

export interface Logger {

  log(): void;
}

export const LOGGER = new InjectionToken<Logger>('LOGGER');

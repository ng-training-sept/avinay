import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {

  private isLoggedIn = false;

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  authenticate(): void {
    this.isLoggedIn = true;
  }

  whoAmI(): string {
    return 'AuthService';
  }
}

/*
LoggerService -> userip, date, request process time (org.abc)

NewLoggerService -> (org.bcd)

 */

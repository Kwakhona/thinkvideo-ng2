import { Injectable } from '@angular/core';
import {StorageService} from './storage.service';

@Injectable()
export class UserService {
  HAS_LOGGED_IN = 'hasLoggedIn';
  constructor(private storage: StorageService) { }

  login(data: any): void {
    this.storage.setItem(this.HAS_LOGGED_IN, true);
    this.setUsername(data.username);
  }

  signup(username: string): void {
    this.storage.setItem(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
  }

  logout(): void {
    this.storage.removeItem(this.HAS_LOGGED_IN);
    this.storage.removeItem('username');
  }

  setUsername(username: string): void {
    this.storage.setItem('username', username);
  }

  getUsername(): Promise<string> {
    return this.storage.getItem('username').then((value) => {
      return value;
    });
  }

  hasLoggedIn(): Promise<boolean> {
    return this.storage.getItem(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  }
}

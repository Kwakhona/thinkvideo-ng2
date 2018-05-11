import {Injectable} from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';

@Injectable()
export class StorageService {

  constructor(private storage: LocalStorageService) {
  }

  setItem(key, value) {
    this.storage.set(key, value);
  }

  getItem(key) {
    return this.storage.get(key);
  }

  removeItem(key) {
    this.storage.remove(key);
  }
}

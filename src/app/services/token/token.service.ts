import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  set token(token: string) {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('token', token);
    }
  }

  get token(): string {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem('token') || '';
    }
    return '';
  }

  clearToken(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('token');
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
}

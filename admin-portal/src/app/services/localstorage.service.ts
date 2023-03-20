import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  public save(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public get(key: string) {
    return localStorage.getItem(key)
  }
  public remove(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}

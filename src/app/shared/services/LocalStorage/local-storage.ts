import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorage {
  public find(key: string, defaultValue?: any): any {
    const data = this.getKey(key);
    if (data === null) {
      return defaultValue ?? null;
    }

    return data;
  }

  public findOrCreate(key: string, data: any): any {
    const localStorageData = this.getKey(key);

    if (localStorageData === null) {
      // const saveData: string = JSON.stringify(data);
      const saveData = data;
      this.setItem(key, saveData);
      return data;
    }

    return localStorageData;
  }

  private getKey(key: string): any {
    try {
      const data = localStorage.getItem(key);
      if (data === null) {
        return null;
      }

      return JSON.parse(data);
    } catch (error) {
      console.error('Fail to getData', error);
      return null;
    }
  }

  public setItem(key: string, data: any): boolean {
    try {
      const saveData: string = JSON.stringify(data);
      localStorage.setItem(key, saveData);
      return true;
    } catch (error) {
      console.error('Fail to save Data', error);
      return false;
    }
  }

  public clearAll(): boolean {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      return false;
    }
  }

  public delete(key: string): boolean {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      return false;
    }
  }
}

import { action, makeObservable, observable } from 'mobx';

export enum ThemeEnum {
  LIGHT = 'light',
  DARK = 'dark',
}

class ThemeStore {
  theme: ThemeEnum = ThemeEnum.LIGHT;
  constructor() {
    makeObservable(this, {
      theme: observable,
      toggleTheme: action,
    });
  }
  toggleTheme(): any {
    this.theme =
      this.theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;
  }
}

export { ThemeStore };

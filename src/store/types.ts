import { UserStore } from 'store/user';
import { ThemeStore } from 'store/theme';

export interface StoreInterface {
  userStore?: UserStore;
  themeStore?: ThemeStore;
}

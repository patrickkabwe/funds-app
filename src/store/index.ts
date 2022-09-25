import { UserStore } from 'store/user';
import { ThemeStore } from 'store/theme';
import { StoreInterface } from 'store/types';

const store: StoreInterface = {
  userStore: new UserStore(),
  themeStore: new ThemeStore(),
};

export default store;

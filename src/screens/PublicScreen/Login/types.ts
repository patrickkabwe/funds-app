import { UserStore } from 'store/user';
import { User } from 'store/user/types';

export interface LoginMutationInput {
  email: string;
  password: string;
}

export interface LoginScreenProps {
  navigation: any;
  store: {
    userStore: UserStore;
  };
}

export interface LoginData {
  loginUser: User;
}

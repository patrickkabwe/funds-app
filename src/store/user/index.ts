import { action, makeObservable, observable } from 'mobx';
import { User } from 'store/user/types';

class UserStore {
  currentUser: User | null = null;
  initialLoading: boolean = true;
  constructor() {
    makeObservable(this, {
      currentUser: observable,
      setUser: action,
      getUser: action,
      initialLoading: observable,
      setInitialLoading: action,
    });
  }
  setUser(payload: User | null): any {
    this.currentUser = payload;
  }
  getUser(): any {
    return this.currentUser;
  }
  setInitialLoading(state: boolean): any {
    this.initialLoading = state;
  }
}

export { UserStore };

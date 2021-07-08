import { store } from 'quasar/wrappers';
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import auth, { IAuthState } from './auth';
import user, { IUserState } from './user';

export interface IRootState {
  auth?: IAuthState,
  user?: IUserState,
}

export default store((/* { ssrContext } */) => {
  const Store = createStore<IRootState>({
    modules: {
      auth,
      user,
    },
    plugins: [
      createPersistedState({
        paths: ['auth', 'user'],
      }),
    ],

    strict: !!process.env.DEBUGGING,
  });

  return Store;
});

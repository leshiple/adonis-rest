import {
  Module, MutationTree, ActionTree, GetterTree,
} from 'vuex';
import { IRootState } from 'src/store/index';
import AuthService from 'src/services/AuthService';
import { LoginPayload } from 'src/types/Auth.d';

export interface IAuthState {
  isAuth: boolean,
}

export const TYPES = {
  SET_AUTH: 'SET_AUTH',
};

const authState = ():IAuthState => ({
  isAuth: false,
});

export const authMutations: MutationTree<IAuthState> = {
  [TYPES.SET_AUTH](state, auth: boolean) {
    state.isAuth = auth;
  },
};

const authActions: ActionTree<IAuthState, IRootState> = {
  async login({ dispatch }, { email, password }: LoginPayload): Promise<boolean> {
    const res = await AuthService.login(email, password);
    if (typeof res !== 'boolean') {
      await dispatch('setAuth', true);
      await dispatch('user/setUser', res.data, {
        root: true,
      });
      return true;
    }
    return false;
  },
  async logout({ dispatch }): Promise<void> {
    await AuthService.logout();
    await dispatch('setAuth', false);
    await dispatch('user/clearUser', null, {
      root: true,
    });
  },
  async confirmEmail({ dispatch }, emailVerificationToken: string): Promise<boolean> {
    const res = await AuthService.confirmEmail(emailVerificationToken);

    if (typeof res !== 'boolean') {
      await dispatch('setAuth', true);
      return true;
    }
    return false;
  },
  setAuth({ commit }, auth: boolean): void {
    commit(TYPES.SET_AUTH, auth);
  },
};

const authGetters: GetterTree<IAuthState, IRootState> = {
  getAuth(state): boolean {
    return state.isAuth;
  },
};

const authModule: Module<IAuthState, IRootState> = {
  namespaced: true,
  actions: authActions,
  getters: authGetters,
  mutations: authMutations,
  state: authState,
};

export default authModule;

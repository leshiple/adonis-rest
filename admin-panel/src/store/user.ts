import {
  Module, MutationTree, ActionTree, GetterTree,
} from 'vuex';
import { IRootState } from 'src/store/index';
import { IUser } from 'src/types/User.d';
import UserService from 'src/services/UserService';

export type IUserState = IUser

export const TYPES = {
  SET_USER: 'SET_USER',
};

const userState = ():IUserState => ({
  id: '',
  email: '',
});

export const userMutations: MutationTree<IUserState> = {
  [TYPES.SET_USER](state, { id, email }: IUser) {
    state.id = id;
    state.email = email;
  },
};

const userActions: ActionTree<IUserState, IRootState> = {
  async fetchMe({ dispatch }): Promise<boolean> {
    const res = await UserService.fetchMe();

    if (res) {
      await dispatch('setUser', res);
      return true;
    }

    await dispatch('auth/logout', null, {
      root: true,
    });
    return false;
  },
  setUser({ commit }, user: IUser): void {
    commit(TYPES.SET_USER, user);
  },
  clearUser({ commit }): void {
    commit(TYPES.SET_USER, {
      id: '',
      email: '',
    });
  },
};

const userGetters: GetterTree<IUserState, IRootState> = {
  getEmail(state): string {
    return state.email;
  },
};

const userModule: Module<IUserState, IRootState> = {
  namespaced: true,
  actions: userActions,
  getters: userGetters,
  mutations: userMutations,
  state: userState,
};

export default userModule;

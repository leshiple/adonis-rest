import { RouteLocationNormalized } from 'vue-router';
import { Store } from 'vuex';
import hasOwnProperty from 'src/utils/hasOwnProperty';
import { IRootState } from 'src/store';

export default {
  async init(store: Store<IRootState>) {
    await store.dispatch('user/fetchMe');
  },
  checkAccess(store: Store<IRootState>, to: RouteLocationNormalized) {
    const hasMeta = typeof to.meta === 'object';
    const requiresAuth = hasMeta && hasOwnProperty(to.meta, 'requiresAuth') && to.meta.requiresAuth;

    if (requiresAuth) {
      return store.state.auth?.isAuth;
    }
    return true;
  },
};

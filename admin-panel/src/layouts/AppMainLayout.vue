<template>
  <q-layout view="hHh Lpr lFf">
    <app-header
      :show-hamburger="true"
      @clickHamburger="toggleLeftDrawer"
    />
    <q-page-container>
      <app-sidebar
        v-model="leftDrawerOpen"
        :links="links"
      />
      <q-page class="q-py-lg">
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import {
  defineComponent, ref, provide,
} from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import AppHeader from 'src/parts/AppHeader.vue';
import AppSidebar from 'src/parts/AppSidebar.vue';
import useSidebar from 'src/composables/useSidebar';

export default defineComponent({
  name: 'AppMainLayout',

  components: {
    AppHeader,
    AppSidebar,
  },

  setup() {
    const $store = useStore();
    const router = useRouter();
    const { links } = useSidebar();
    const leftDrawerOpen = ref(true);

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    const logout = async () => {
      await $store.dispatch('auth/logout');
      await router.push({ path: '/login' });
    };

    provide('logout', logout);
    provide('email', $store.state.user.email);

    return {
      links,
      leftDrawerOpen,
      toggleLeftDrawer,
    };
  },
});
</script>

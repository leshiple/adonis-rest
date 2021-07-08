<template>
  <component
    :is="layout"
    v-if="!loading"
  >
    <slot />
  </component>
  <transition name="fade-delay">
    <app-loading-screen v-if="loading" />
  </transition>
</template>

<script lang="ts">
import {
  defineComponent, ref, onBeforeMount, computed,
} from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import AppMainLayout from 'src/layouts/AppMainLayout.vue';
import AppAuthLayout from 'src/layouts/AppAuthLayout.vue';
import AppLoadingScreen from 'src/components/AppLoadingScreen.vue';
import GuardRouteService from 'src/services/GuardRouteService';
import hasOwnProperty from 'src/utils/hasOwnProperty';

const appLayouts = {
  AppAuthLayout,
  AppMainLayout,
};

export default defineComponent({
  name: 'AppBaseLayout',
  components: {
    AppLoadingScreen,
  },

  setup() {
    const store = useStore();
    const route = useRoute();
    const loading = ref(true);

    const layout = computed(() => {
      const layoutName = route.meta.layout as string;
      if (hasOwnProperty(appLayouts, layoutName)) {
        return appLayouts[layoutName];
      }

      return AppMainLayout;
    });

    onBeforeMount(async () => {
      await GuardRouteService.init(store);
      loading.value = false;
    });

    return {
      loading,
      layout,
    };
  },
});
</script>

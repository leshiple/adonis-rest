<template>
  <app-base-layout>
    <router-view />
  </app-base-layout>
</template>
<script lang="ts">
import {
  defineComponent, provide,
} from 'vue';
import AppBaseLayout from 'src/layouts/AppBaseLayout.vue';
import themes from './composables/themes';

export default defineComponent({
  name: 'App',
  components: {
    AppBaseLayout,
  },

  setup() {
    const { theme } = themes;

    provide('theme', theme);
  },
});
</script>

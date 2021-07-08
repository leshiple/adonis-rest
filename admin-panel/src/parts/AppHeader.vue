<template>
  <q-header
    bordered
  >
    <q-toolbar>
      <q-btn
        v-if="showHamburger"
        flat
        dense
        round
        icon="las la-bars"
        aria-label="Menu"
        @click="handleClickHamburger"
      />

      <q-toolbar-title>
        Rest
      </q-toolbar-title>
      <app-notification-dropdown />
      <app-profile-dropdown />
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppNotificationDropdown from 'src/components/AppNotificationDropdown.vue';
import AppProfileDropdown from 'src/components/AppProfileDropdown.vue';

export default defineComponent({
  name: 'AppHeader',
  components: {
    AppNotificationDropdown,
    AppProfileDropdown,
  },
  props: {
    showHamburger: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    clickHamburger: null,
  },
  setup(_, { emit }) {
    const handleClickHamburger = () => {
      emit('clickHamburger');
    };
    return {
      handleClickHamburger,
    };
  },
});
</script>

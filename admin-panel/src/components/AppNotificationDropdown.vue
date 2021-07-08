<template>
  <q-btn
    flat
    round
    icon="las la-bell"
  >
    <q-menu>
      <q-list style="min-width: 200px">
        <q-item
          v-close-popup
        >
          <q-item-section>Уведомлений нет</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppNotificationDropdown',
});
</script>

<template>
  <q-btn
    flat
    round
    icon="las la-user-alt"
  >
    <q-menu>
      <q-list style="min-width: 100px">
        <q-item
          v-close-popup
        >
          <q-item-section>{{ email }}</q-item-section>
        </q-item>
        <q-separator />
        <q-item
          v-close-popup
          clickable
          class="row items-center"
        >
          <q-icon
            name="las la-user-cog"
            class="q-mr-sm"
            size="1.4rem"
          />
          <q-item-section>Профиль</q-item-section>
        </q-item>
        <q-separator />
        <q-item
          v-close-popup
          clickable
          class="row items-center"
          @click="logout"
        >
          <q-icon
            name="las la-sign-out-alt"
            class="q-mr-sm"
            size="1.4rem"
          />
          <q-item-section>
            Выйти
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

export default defineComponent({
  name: 'AppProfileDropdown',

  setup() {
    const email = inject('email');
    const logout = inject('logout');

    return {
      email,
      logout,
    };
  },
});
</script>

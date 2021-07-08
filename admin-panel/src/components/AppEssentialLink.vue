<template>
  <q-item
    clickable
    tag="router-link"
    :to="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppEssentialLink',
  props: {
    title: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      required: true,
    },
  },
});
</script>

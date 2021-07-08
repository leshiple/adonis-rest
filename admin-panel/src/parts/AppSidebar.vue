<template>
  <q-drawer
    v-model="isOpen"
    show-if-above
    bordered
    :width="200"
    class="bg-grey-1"
  >
    <q-list>
      <app-essential-link
        v-for="link in links"
        :key="link.title"
        v-bind="link"
      />
    </q-list>
  </q-drawer>
</template>
<script lang="ts">
import {
  defineComponent, computed, WritableComputedRef, PropType,
} from 'vue';
import AppEssentialLink from 'src/components/AppEssentialLink.vue';
import { IEssentialLink } from 'src/types/UI.d';

export default defineComponent({
  name: 'AppSidebar',
  components: {
    AppEssentialLink,
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    links: {
      type: Array as PropType<IEssentialLink[]>,
      required: true,
    },
  },
  emits: {
    'update:modelValue': null,
  },
  setup(props, { emit }) {
    const isOpen: WritableComputedRef<boolean> = computed({
      get(): boolean {
        return props.modelValue;
      },
      set(newValue: boolean): void {
        emit('update:modelValue', newValue);
      },
    });

    return {
      isOpen,
    };
  },
});
</script>

<style>
  .q-drawer .q-item__section--avatar {
    min-width: auto;
  }
</style>

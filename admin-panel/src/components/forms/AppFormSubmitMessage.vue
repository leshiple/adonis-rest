<template>
  <div :class="rootClassNames">
    <q-icon
      name="check_circle"
    />
    <div class="text-xl">
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppFormSubmitMessage',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      rootClassNames: [
        'absolute',
        'transition-all',
        'left-0',
        'right-0',
        'top-2/4',
        '-translate-y-8',
        'transform',
        'flex',
        'flex-nowrap',
        'items-center',
      ],
    };
  },
});
</script>

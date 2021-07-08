<template>
  <div class="loading-screen">
    <q-spinner
      color="primary"
      size="3em"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppLoadingScreen',
});
</script>
<style scoped>
  .loading-screen {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
  }
</style>

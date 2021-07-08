<template>
  <q-layout>
    <q-page-container class="row items-stretch">
      <div class="bg col" />
      <div class="col">
        <q-page class="content-wrap">
          <div class="content">
            <router-view v-slot="{ Component }">
              <transition name="fade">
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
        </q-page>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'AppAuthLayout',
  setup() {
    const store = useStore();
    const router = useRouter();

    onBeforeMount(async () => {
      if (store.state.auth.isAuth) {
        await router.push({ name: 'home' });
      }
    });
  },
});
</script>

<style lang="scss" scoped>
.bg {
  background-color: $green-2;
  background-image: url('../assets/auth-bg.svg');
  background-position: center bottom;
  background-size: 70%;
  background-repeat: no-repeat;
}

.content-wrap {
  display: flex;
  align-items: center;
}

.content {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
</style>

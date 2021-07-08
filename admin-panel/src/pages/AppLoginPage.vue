<template>
  <h1 class="text-h3 q-mb-none">
    {{ $t('loginPageTitle') }}
  </h1>
  <div class="text-subtitle1 text-weight-regular text-grey-9 q-mb-xl">
    {{ $t('loginPageSubtitle') }}
    <router-link
      to="/signup"
      class="text-blue-4"
    >
      {{ $t('loginPageSubtitleLink') }}
    </router-link>
  </div>
  <app-login-form
    :sending="sending"
    @submit="onSubmit"
  />
  <router-link
    to="/forgot-password"
    class="block q-mt-sm text-blue-4"
  >
    {{ $t('loginPageLinkForgotPassword') }}
  </router-link>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import AppLoginForm from 'src/components/forms/AppLoginForm.vue';
import { LoginPayload } from 'src/types/Auth';

export default defineComponent({
  name: 'AppLoginPage',
  components: {
    AppLoginForm,
  },
  setup() {
    const router = useRouter();
    const $store = useStore();
    const sending = ref(false);

    const login = async (payload: LoginPayload) => $store.dispatch('auth/login', payload);

    const onSubmit = async (event: LoginPayload) => {
      sending.value = true;

      const isLogin = await login(event);

      sending.value = false;

      if (isLogin) {
        await router.push({ path: '/' });
      }
    };

    return {
      sending,
      onSubmit,
    };
  },
});
</script>

<template>
  <div v-if="passwordResetToken">
    <h1>
      {{ $t('resetPasswordPageTitle') }}
    </h1>
    <div>
      {{ $t('resetPasswordPageSubtitle') }}
    </div>
    <app-reset-password-form
      :sending="sending"
      @submit="onSubmit"
      @reset="onReset"
    />
  </div>
  <div v-else>
    <h1>
      {{ $t('resetPasswordPageErrorTitle') }}
    </h1>
    <div>
      {{ $t('resetPasswordPageErrorSubtitle') }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import AppResetPasswordForm from 'src/components/forms/AppResetPasswordForm.vue';
import AuthService from 'src/services/AuthService';
import urlUtils from 'src/utils/url';

export default defineComponent({
  name: 'AppResetPasswordPage',
  components: {
    AppResetPasswordForm,
  },
  setup() {
    const router = useRouter();
    const sending = ref(false);
    const passwordResetToken = urlUtils.getPasswordResetToken();

    const onSubmit = async (password: string) => {
      if (passwordResetToken) {
        sending.value = true;

        const result = await AuthService.resetPassword(password, passwordResetToken);

        sending.value = false;

        if (result) {
          await router.push({ path: '/' });
        }
      }
    };
    const onReset = async () => {
      await router.push({ path: '/login' });
    };

    return {
      sending,
      onSubmit,
      onReset,
      passwordResetToken,
    };
  },
});
</script>

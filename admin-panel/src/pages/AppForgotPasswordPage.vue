<template>
  <div class="relative">
    <transition name="fade-in-up">
      <app-form-submit-message
        v-if="success"
        type="success"
        :text="$t('forgotPasswordPageSuccess')"
      />
    </transition>
    <div
      class="transition-opacity"
      :class="{'pointer-events-none opacity-0': success}"
    >
      <h1 class="text-h3 q-mb-none">
        {{ $t('forgotPasswordPageTitle') }}
      </h1>
      <div class="text-subtitle1 text-weight-regular text-grey-9 q-mb-xl">
        {{ $t('forgotPasswordPageSubtitle') }}
      </div>
      <app-forgot-password-form
        :sending="sending"
        @submit="onSubmit"
        @reset="onReset"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import AppForgotPasswordForm from 'src/components/forms/AppForgotPasswordForm.vue';
import AppFormSubmitMessage from 'src/components/forms/AppFormSubmitMessage.vue';
import AuthService from 'src/services/AuthService';

export default defineComponent({
  name: 'AppForgotPasswordPage',
  components: {
    AppForgotPasswordForm,
    AppFormSubmitMessage,
  },
  setup() {
    const router = useRouter();
    const success = ref(false);
    const sending = ref(false);

    const onSubmit = async (email: string) => {
      sending.value = true;

      success.value = await AuthService.forgotPassword(email);

      sending.value = false;
    };
    const onReset = async () => {
      await router.push({ path: '/login' });
    };

    return {
      success,
      sending,
      onSubmit,
      onReset,
    };
  },
});
</script>

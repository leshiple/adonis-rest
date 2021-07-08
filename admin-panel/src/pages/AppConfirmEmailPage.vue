<template>
  <div class="relative">
    <transition name="fade-in-up">
      <app-form-submit-message
        v-if="success"
        type="success"
        :text="$t('registerPageSuccess')"
      />
    </transition>
    <div
      class="transition-opacity"
      :class="{'pointer-events-none opacity-0': success}"
    >
      <h1>
        {{ $t('confirmEmailPageTitle') }}
      </h1>
      <div>
        {{ $t('confirmEmailPageSubtitle') }}
      </div>
      <app-confirm-email-form
        :sending="sending"
        @success="onSubmit"
        @reset="onReset"
      />
    </div>
  </div>
  <transition name="fade-delay">
    <app-loading-screen v-if="loading" />
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import AppLoadingScreen from 'src/components/AppLoadingScreen.vue';
import AppConfirmEmailForm from 'src/components/forms/AppConfirmEmailForm.vue';
import AppFormSubmitMessage from 'src/components/forms/AppFormSubmitMessage.vue';
import AuthService from 'src/services/AuthService';
import urlUtils from 'src/utils/url';

export default defineComponent({
  name: 'AppConfirmEmailPage',
  components: {
    AppLoadingScreen,
    AppConfirmEmailForm,
    AppFormSubmitMessage,
  },
  setup() {
    const $store = useStore();
    const router = useRouter();
    const loading = ref(true);
    const success = ref(false);
    const sending = ref(false);

    const confirmEmail = async (emailVerificationToken: string) => $store.dispatch('auth/confirmEmail', emailVerificationToken);

    onBeforeMount(async () => {
      const emailVerificationToken = urlUtils.getEmailVerificationToken();

      if (emailVerificationToken) {
        const result = await confirmEmail(emailVerificationToken);
        if (result) {
          await router.push({ path: '/' });
        }
      }

      loading.value = false;
    });

    const onSubmit = async (email: string) => {
      sending.value = true;

      success.value = await AuthService.sendConfirmationEmail(email);

      sending.value = false;
    };

    const onReset = async () => {
      await router.push({ path: '/login' });
    };

    return {
      loading,
      success,
      sending,
      onSubmit,
      onReset,
    };
  },
});
</script>

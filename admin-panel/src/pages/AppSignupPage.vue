<template>
  <div class="relative">
    <transition name="fade-in-up">
      <app-form-submit-message
        v-if="success"
        type="success"
        :text="$t('registerPageSuccess')"
      />
    </transition>
    <div>
      <h1 class="text-h3">
        {{ $t('registerPageTitle') }}
      </h1>
      <app-signup-form
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
import AppSignupForm from 'src/components/forms/AppSignupForm.vue';
import AppFormSubmitMessage from 'src/components/forms/AppFormSubmitMessage.vue';
import AuthService from 'src/services/AuthService';
import { SignupPayload } from 'src/types/Auth';

export default defineComponent({
  name: 'AppSignupPage',
  components: {
    AppSignupForm,
    AppFormSubmitMessage,
  },
  setup() {
    const router = useRouter();
    const success = ref(false);
    const sending = ref(false);

    const onSubmit = async ({ email, password }: SignupPayload) => {
      sending.value = true;

      success.value = await AuthService.signup(email, password);

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

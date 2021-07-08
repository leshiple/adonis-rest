<template>
  <div>
    <q-form
      class="q-gutter-md"
      @submit="onSubmit"
      @reset="onReset"
    >
      <app-email-field
        v-model="email"
        :disable="sending"
      />
      <app-password-field
        v-model="password"
        :disable="sending"
      />

      <div>
        <q-btn
          unelevated
          :label="$t('registerFormSubmitButton')"
          type="submit"
          :loading="sending"
          :disable="sending"
          color="primary"
        />
        <q-btn
          :label="$t('registerFormResetButton')"
          type="reset"
          :disable="sending"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AppEmailField from 'src/components/fields/AppEmailField.vue';
import AppPasswordField from 'src/components/fields/AppPasswordField.vue';

export default defineComponent({
  name: 'SignupForm',
  components: {
    AppEmailField,
    AppPasswordField,
  },
  props: {
    sending: {
      type: Boolean,
      required: true,
    },
  },
  emits: {
    submit: null,
    reset: null,
  },
  setup(_, { emit }) {
    const email = ref('alexander.epihin@ismart.pro');
    const password = ref('aasdf34G');

    const onSubmit = async () => {
      emit('submit', {
        email: email.value,
        password: password.value,
      });
    };

    const onReset = async () => {
      email.value = '';
      password.value = '';

      emit('reset');
    };

    return {
      email,
      password,
      onSubmit,
      onReset,
    };
  },
});
</script>

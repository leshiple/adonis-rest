<template>
  <div>
    <q-form
      class="q-gutter-md"
      @submit="onSubmit"
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
          :label="$t('loginFormButton')"
          :loading="sending"
          :disable="sending"
          type="submit"
          color="primary"
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
  name: 'AppLoginForm',
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

    return {
      email,
      password,
      onSubmit,
    };
  },
});
</script>

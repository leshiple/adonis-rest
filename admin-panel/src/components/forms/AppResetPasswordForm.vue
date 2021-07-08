<template>
  <div>
    <q-form
      class="q-gutter-md"
      @submit="onSubmit"
      @reset="onReset"
    >
      <app-password-field
        v-model="password"
        :disable="sending"
      />
      <div>
        <q-btn
          unelevated
          :label="$t('forgotPasswordFormButton')"
          type="submit"
          :loading="sending"
          :disable="sending"
          color="primary"
        />
        <q-btn
          :label="$t('forgotPasswordFormResetButton')"
          type="reset"
          color="primary"
          :disable="sending"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AppPasswordField from 'src/components/fields/AppPasswordField.vue';

export default defineComponent({
  name: 'AppResetPasswordForm',
  components: {
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
    const password = ref('');

    const onSubmit = async () => {
      emit('submit', password.value);
    };

    const onReset = async () => {
      emit('reset');
    };

    return {
      password,
      onSubmit,
      onReset,
    };
  },
});
</script>

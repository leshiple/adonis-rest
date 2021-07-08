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

export default defineComponent({
  name: 'AppConfirmEamilForm',
  components: {
    AppEmailField,
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

    const onSubmit = async () => {
      emit('submit', email);
    };

    const onReset = async () => {
      email.value = '';

      emit('reset');
    };

    return {
      email,
      onSubmit,
      onReset,
    };
  },
});
</script>

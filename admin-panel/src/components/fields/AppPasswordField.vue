<template>
  <q-input
    v-model="password"
    :disable="disable"
    filled
    type="password"
    :label="$t('fieldPasswordLabel')"
    lazy-rules
    :rules="[
      value => isNotEmpty(value) || $t('fieldPasswordErrorMessageRequired'),
    ]"
  />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'AppPasswordField',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    disable: {
      type: Boolean,
      required: true,
    },
  },
  emits: {
    'update:modelValue': null,
  },
  setup(props, { emit }) {
    const password = ref(props.modelValue);

    const isNotEmpty = (value: null | string) => value && value.length > 0;

    const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const isCorrectReg = (value: null | string) => reg.test(String(value));

    watch(password, (newValue) => {
      emit('update:modelValue', newValue);
    });

    return {
      password,
      isNotEmpty,
      isCorrectReg,
    };
  },
});
</script>

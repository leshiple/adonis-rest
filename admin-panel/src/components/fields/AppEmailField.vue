<template>
  <div>
    <q-input
      v-model="email"
      :disable="disable"
      filled
      :label="$t('fieldEmailLabel')"
      lazy-rules
      :rules="[
        value => isNotEmpty(value) || $t('fieldEmailErrorMessageRequired'),
        value => isCorrectReg(value) || $t('fieldEmailErrorMessageReg')
      ]"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, watch,
} from 'vue';

export default defineComponent({
  name: 'AppEmailField',
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
    const email = ref(props.modelValue);

    const isNotEmpty = (value: null | string) => value && value.length > 0;

    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isCorrectReg = (value: null | string) => reg.test(String(value).toLowerCase());

    watch(email, (newValue) => {
      emit('update:modelValue', newValue);
    });

    return {
      email,
      isNotEmpty,
      isCorrectReg,
    };
  },
});
</script>

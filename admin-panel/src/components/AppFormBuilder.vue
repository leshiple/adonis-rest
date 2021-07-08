<template>
  <q-form
    class="form"
  >
    <div class="grid">
      <template
        v-for="(item, index) in schema"
        :key="index"
      >
        <q-input
          v-if="['text', 'number'].includes(item.type)"
          v-model="model[item.name]"
          outlined
          :type="item.type"
          :label="$t(item.label)"
          lazy-rules
          :rules="[
            value => isNotEmpty(value) || $t('fieldEmailErrorMessageRequired'),
          ]"
        />
        <q-select
          v-else-if="item.type === 'select'"
          v-model="model[item.name]"
          outlined
          :label="$t(item.label)"
          :options="item.options"
          emit-value
          map-options
          class="q-field--with-bottom"
        />
        <app-image-field
          v-else-if="item.type === 'image'"
          v-model="model[item.name]"
          accept="image/png"
          :max-file-size="2222222222"
          :disable="false"
          :label="$t(item.label)"
        />
      </template>
    </div>
  </q-form>
</template>

<script lang="ts">
import {
  defineComponent, reactive, watch, PropType,
} from 'vue';
import AppImageField from 'src/components/fields/AppImageField.vue';
import { SchemaField } from 'src/types/UI.d';

export default defineComponent({
  name: 'AppFormBuilder',
  components: {
    AppImageField,
  },
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
    schema: {
      type: Array as PropType<SchemaField[]>,
      required: true,
    },
  },
  emits: {
    'update:modelValue': null,
  },
  setup(props, { emit }) {
    const model = reactive(props.modelValue);

    const isNotEmpty = (value: null | string) => value && value.length > 0;

    watch(model, (value) => {
      emit('update:modelValue', value);
    });

    return {
      model,
      isNotEmpty,
    };
  },
});
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }
</style>

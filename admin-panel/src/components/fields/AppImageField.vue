<template>
  <div class="q-field q-field--with-bottom">
    <div
      v-if="image.url"
      class="relative-position"
    >
      <q-img src="http://lorempixel.com/1200/800/" />
      <div
        class="absolute-top q-pa-sm flex justify-between items-center"
        style="background-color: hsla(0, 0%, 100%, 0.5)"
      >
        <h4 class="text-subtitle1 q-ma-none">
          {{ label }}
        </h4>
        <q-btn
          round
          dense
          color="negative"
          icon="las la-times"
          @click="remove"
        />
      </div>
    </div>
    <q-uploader
      v-else
      url="/api/v1/upload"
      field-name="image"
      style="width: 100%"
      :accept="accept"
      :max-file-size="maxFileSize"
      @uploaded="onUpload"
      @failed="onFail"
      @rejected="onRejected"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, watch, Ref, PropType,
} from 'vue';
import { useI18n } from 'vue-i18n';
import NotificationService from 'src/services/NotificationService';

interface UploaderError {
  failedPropValidation: string
}

interface Image {
  id: string
  url: string
}

export default defineComponent({
  name: 'AppImageField',
  props: {
    modelValue: {
      type: Object as PropType<Image>,
      required: true,
    },
    accept: {
      type: String,
      required: true,
    },
    maxFileSize: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      required: true,
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
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const { t } = useI18n();
    const image:Ref<Image> = ref(props.modelValue);

    const onUpload = ({ xhr }: { xhr: XMLHttpRequest }) => {
      const response = JSON.parse(xhr.response);
      const { id, url } = response.body.data;
      image.value = {
        id,
        url,
      };
    };

    const onFail = () => {
      NotificationService.showError(t('failUploadImage'));
    };
    const onRejected = (errors: UploaderError[]) => {
      NotificationService.showError(t(errors[0].failedPropValidation));
    };

    const remove = () => {
      image.value = {
        id: '',
        url: '',
      };
    };

    watch(image, (newValue) => {
      emit('update:modelValue', newValue);
    });

    return {
      image,
      onUpload,
      onFail,
      onRejected,
      remove,
    };
  },
});
</script>

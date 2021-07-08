<template>
  <div>
    <h1 class="text-h5 q-mt-none q-px-lg">
      {{ title }}
    </h1>
    <div class="q-px-lg">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab
          name="main"
          :label="$t('productMainBlockTitle')"
        />
        <q-tab
          name="modifiers"
          label="Модификаторы"
        />
      </q-tabs>

      <q-tab-panels
        v-model="tab"
        animated
      >
        <q-tab-panel name="main">
          <q-card>
            <q-card-section>
              <app-form-builder
                v-if="!loading"
                v-model="product"
                :schema="schema"
              />
            </q-card-section>
          </q-card>
        </q-tab-panel>
        <q-tab-panel name="modifiers">
          Модификаторы
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onBeforeMount, ref, Ref,
} from 'vue';
import { useRoute } from 'vue-router';
import AppFormBuilder from 'src/components/AppFormBuilder.vue';
// import AppImageField from 'src/components/fields/AppImageField.vue';
import useProducts from 'src/composables/useProducts';
import useCategories from 'src/composables/useCategories';
import { SchemaField } from 'src/types/UI.d';

const MAX_FILE_SIZE = 209715; // 2Mb

export default defineComponent({
  name: 'AppProductPage',
  components: {
    AppFormBuilder,
    // AppImageField,
  },
  setup() {
    const route = useRoute();
    const loading: Ref<boolean> = ref(true);
    const schema: Ref<SchemaField[]> = ref([]);
    const title = ref('');
    const tab = ref('main');

    const productId = route.params.id.toString();
    const {
      product, getSchema, loadProduct,
    } = useProducts(productId);

    const { getOptions: getCategoriesOptions } = useCategories();

    onBeforeMount(async () => {
      await loadProduct();

      if (product.value) {
        title.value = product.value.name;
      }

      const categoriesOptions = await getCategoriesOptions();
      schema.value = getSchema(categoriesOptions);
      loading.value = false;
    });

    return {
      product,
      schema,
      loading,
      title,
      tab,
      MAX_FILE_SIZE,
    };
  },
});
</script>

<template>
  <div>
    <h1 class="text-h5 q-mt-none q-px-lg">
      {{ title }}
    </h1>
    <div class="row items-start">
      <div class="col col-6 q-px-lg">
        <q-card>
          <q-card-section>
            <h3 class="text-h6 q-ma-none">
              {{ $t('productMainBlockTitle') }}
            </h3>
          </q-card-section>
          <q-card-section>
            <app-form-builder
              v-if="!loading"
              v-model="category"
              :schema="schema"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref, defineComponent, onBeforeMount, Ref,
} from 'vue';
import { useRoute } from 'vue-router';
import useCategories from 'src/composables/useCategories';
import AppFormBuilder from 'src/components/AppFormBuilder.vue';
import { SchemaField } from 'src/types/UI.d';

export default defineComponent({
  name: 'AppCategoryPage',
  components: {
    AppFormBuilder,
  },
  setup() {
    const route = useRoute();
    const loading: Ref<boolean> = ref(true);
    const schema: Ref<SchemaField[]> = ref([]);
    const title = ref('');
    const { category, loadCategory, getSchema } = useCategories();

    onBeforeMount(async () => {
      const categoryId = route.params.id.toString();
      await loadCategory(categoryId);

      if (category.value) {
        title.value = category.value.name;
      }

      schema.value = getSchema();
      loading.value = false;
    });

    return {
      category,
      schema,
      loading,
      title,
    };
  },
});
</script>

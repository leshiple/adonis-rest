<template>
  <div class="q-px-lg">
    <app-table
      title="Категории"
      :columns="columns"
      :load="load"
      @row-click="onRowClick"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';
import { useRouter } from 'vue-router';
import AppTable from 'src/components/AppTable.vue';
import CategoriesService from 'src/services/CategoriesService';
import useCategories from 'src/composables/useCategories';
import { IProductBase } from 'src/types/Product.d';

export default defineComponent({
  name: 'AppCategoriesPage',
  components: {
    AppTable,
  },
  setup() {
    const router = useRouter();
    const { columns } = useCategories();

    const onRowClick = async (row: IProductBase) => {
      await router.push({
        name: 'category',
        params: {
          id: row.id,
        },
      });
    };

    return {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      load: CategoriesService.index,
      columns,
      onRowClick,
    };
  },
});
</script>

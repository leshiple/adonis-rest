<template>
  <div class="q-px-lg">
    <app-table
      title="Товары"
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
import useProducts from 'src/composables/useProducts';
import ProductService from 'src/services/ProductService';
import { IProductBase } from 'src/types/Product.d';

export default defineComponent({
  name: 'AppProductsPage',
  components: {
    AppTable,
  },
  setup() {
    const router = useRouter();
    const { columns } = useProducts();

    const onRowClick = async (row: IProductBase) => {
      await router.push({
        name: 'product',
        params: {
          id: row.id,
        },
      });
    };

    return {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      load: ProductService.index,
      columns,
      onRowClick,
    };
  },
});
</script>

<template>
  <div>
    <q-table
      v-model:pagination="pagination"
      :loading="loading"
      :title="title"
      :rows="rows"
      :columns="columns"
      :filter="filter"
      separator="cell"
      row-key="id"
      binary-state-sort
      @request="onRequest"
      @row-click="onRowClick"
    >
      <template #top-right>
        <q-btn
          round
          color="secondary"
          icon="las la-plus"
          dense
          class="q-mr-lg"
        />
        <q-input
          v-model="filter"
          outlined
          dense
          debounce="300"
          placeholder="Поиск"
        >
          <template #append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, onBeforeMount, Ref,
} from 'vue';
import { IUIPagination } from 'src/types/Pagination.d';

interface TablePaginationProps {
  pagination: IUIPagination
}

export default defineComponent({
  name: 'AppTable',
  props: {
    title: {
      type: String,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    load: {
      type: Function,
      required: true,
    },
  },
  emits: {
    'row-click': null,
  },
  setup(props, { emit }) {
    const pagination = ref({
      sortBy: 'id',
      descending: false,
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 3,
    });
    const filter = ref('');
    const rows: Ref<any[]> = ref([]);
    const loading = ref(false);

    const onRequest = async (requestProps: TablePaginationProps) => {
      loading.value = true;

      const {
        page, rowsPerPage, sortBy, descending,
      } = requestProps.pagination;
      const result = await props.load(requestProps.pagination);
      rows.value.splice(0, rows.value.length, ...result.data);

      pagination.value.page = page;
      pagination.value.rowsPerPage = rowsPerPage;
      pagination.value.sortBy = sortBy;
      pagination.value.descending = descending;
      pagination.value.rowsNumber = result.meta.rowsNumber;

      loading.value = false;
    };

    onBeforeMount(async () => {
      await onRequest({
        pagination: pagination.value,
      });
    });

    const onRowClick = (e: MouseEvent, row: any) => {
      emit('row-click', row);
    };

    return {
      rows,
      pagination,
      filter,
      loading,
      onRequest,
      onRowClick,
    };
  },
});
</script>

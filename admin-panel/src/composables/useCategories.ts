import { ref, Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import CategoriesService from 'src/services/CategoriesService';
import { ISelectOption, SchemaField } from 'src/types/UI.d';
import { ICategory } from 'src/types/Category.d';

export default () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { t } = useI18n();
  const category: Ref<ICategory | null> = ref(null);

  const schema: SchemaField[] = [
    {
      name: 'id',
      type: 'text',
      label: 'id',
    },
    {
      name: 'name',
      type: 'text',
      label: 'name',
    },
    {
      name: 'slug',
      type: 'text',
      label: 'slug',
    },
  ];

  const columns = [
    {
      name: 'id',
      required: true,
      label: t('id'),
      align: 'left',
      field: 'id',
      sortable: true,
    },
    {
      name: 'name',
      required: true,
      label: t('name'),
      align: 'left',
      field: 'name',
      sortable: true,
    },
    {
      name: 'slug',
      required: true,
      label: t('slug'),
      align: 'left',
      field: 'name',
      sortable: true,
    },
  ];

  const loadCategory = async (categoryId: string) => {
    const { data } = await CategoriesService.show(categoryId);
    category.value = data;
  };

  const getOptions = async (): Promise<ISelectOption[]> => {
    const { data } = await CategoriesService.all();
    return data.map(({ id, name }) => ({
      label: name,
      value: id,
    }));
  };

  const getSchema = (): SchemaField[] => schema;

  return {
    getOptions,
    columns,
    category,
    loadCategory,
    getSchema,
  };
};

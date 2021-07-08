import { ref, Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import ProductService from 'src/services/ProductService';
import { SchemaField, ISelectOption } from 'src/types/UI.d';
import { IProduct } from 'src/types/Product.d';

export default (productId = '') => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { t } = useI18n();
  const product: Ref<IProduct | null> = ref(null);

  const schema: SchemaField[] = [
    {
      name: 'image',
      type: 'image',
      label: 'image',
    },
    {
      name: 'categoryId',
      type: 'select',
      label: 'category',
    },
    {
      name: 'id',
      type: 'text',
      label: 'id',
    },
    {
      name: 'iikoId',
      type: 'text',
      label: 'iikoId',
    },
    {
      name: 'code',
      type: 'text',
      label: 'code',
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
    {
      name: 'price',
      type: 'number',
      label: 'price',
    },
    {
      name: 'weight',
      type: 'number',
      label: 'weight',
    },
    {
      name: 'measureUnit',
      type: 'text',
      label: 'measureUnit',
    },
    {
      name: 'energyAmount',
      type: 'number',
      label: 'energyAmount',
    },
    {
      name: 'energyFullAmount',
      type: 'number',
      label: 'energyFullAmount',
    },
    {
      name: 'fiberAmount',
      type: 'number',
      label: 'fiberAmount',
    },
    {
      name: 'fiberFullAmount',
      type: 'number',
      label: 'fiberFullAmount',
    },
    {
      name: 'fatAmount',
      type: 'number',
      label: 'fatAmount',
    },
    {
      name: 'fatFullAmount',
      type: 'number',
      label: 'fatFullAmount',
    },
    {
      name: 'carbohydrateAmount',
      type: 'number',
      label: 'carbohydrateAmount',
    },
    {
      name: 'carbohydrateFullAmount',
      type: 'number',
      label: 'carbohydrateFullAmount',
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
      name: 'iikoId',
      required: true,
      label: t('iikoId'),
      align: 'left',
      field: 'iikoId',
      sortable: true,
    },
    {
      name: 'code',
      required: true,
      label: t('code'),
      align: 'left',
      field: 'code',
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
      name: 'price',
      required: true,
      label: t('price'),
      align: 'left',
      field: 'price',
      sortable: true,
    },
  ];

  const loadProduct = async () => {
    const { data } = await ProductService.show(productId);
    product.value = data;
    product.value.image = {
      id: data.image.id,
      url: data.image.url,
    };
  };

  const getSchema = (categoriesOptions: ISelectOption[]): SchemaField[] => {
    schema[1].options = categoriesOptions;
    return schema;
  };

  return {
    product,
    loadProduct,
    getSchema,
    columns,
  };
};

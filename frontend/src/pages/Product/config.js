export const fields = {
  name: {
    type: 'string',
    required: true,
  },
  productCategory: {
    type: 'async',
    label: 'product_category',
    entity: 'productcategory',
    displayLabels: ['name'],
    searchFields: 'name',
    dataIndex: ['productCategory', 'name'],
    redirectLabel: 'Add New Product Category',
    withRedirect: true,
    urlToRedirect: '/category/product',
  },
  currency: {
    type: 'select',
    options: [
      { value: 'USD', label: 'USD' },
      { value: 'EUR', label: 'EUR' },
      { value: 'GBP', label: 'GBP' },
      { value: 'INR', label: 'INR' },
      { value: 'AUD', label: 'AUD' },
    ],
  },
  price: {
    type: 'currency',
    required: true,
  },
  description: {
    type: 'textarea',
  },
  image: {
    type: 'string',
  },
};

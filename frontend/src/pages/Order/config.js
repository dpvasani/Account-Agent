export const fields = {
  number: {
    type: 'number',
    required: true,
  },
  name: {
    type: 'string',
    required: true,
  },
  product: {
    type: 'async',
    label: 'product',
    entity: 'product',
    displayLabels: ['name'],
    searchFields: 'name',
    dataIndex: ['product', 'name'],
  },
  quantity: {
    type: 'number',
    required: true,
  },
  price: {
    type: 'currency',
    required: true,
  },
  discount: {
    type: 'number',
  },
  total: {
    type: 'currency',
    required: true,
  },
  status: {
    type: 'select',
    options: [
      { value: 'Pending', label: 'Pending' },
      { value: 'Processing', label: 'Processing' },
      { value: 'Shipped', label: 'Shipped' },
      { value: 'Delivered', label: 'Delivered' },
      { value: 'Cancelled', label: 'Cancelled' },
    ],
  },
  phone: {
    type: 'phone',
  },
  state: {
    type: 'string',
  },
  city: {
    type: 'string',
  },
  note: {
    type: 'textarea',
  },
};

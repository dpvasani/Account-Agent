export const fields = {
  name: {
    type: 'string',
    required: true,
  },
  expenseCategory: {
    type: 'async',
    label: 'expense_category',
    entity: 'expensecategory',
    displayLabels: ['name'],
    searchFields: 'name',
    dataIndex: ['expenseCategory', 'name'],
    required: true,
    redirectLabel: 'Add New Expense Category',
    withRedirect: true,
    urlToRedirect: '/category/expense',
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
  total: {
    type: 'currency',
    required: true,
  },
  description: {
    type: 'textarea',
  },
  ref: {
    type: 'string',
  },
};

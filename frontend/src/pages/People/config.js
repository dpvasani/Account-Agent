export const fields = {
  firstname: {
    type: 'string',
    required: true,
  },
  lastname: {
    type: 'string',
    required: true,
  },
  company: {
    type: 'async',
    label: 'company',
    entity: 'company',
    displayLabels: ['name'],
    searchFields: 'name',
    dataIndex: ['company', 'name'],
    redirectLabel: 'Add New Company',
    withRedirect: true,
    urlToRedirect: '/company',
  },
  country: {
    type: 'country',
  },
  phone: {
    type: 'phone',
  },
  email: {
    type: 'email',
  },
};

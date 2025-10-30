export const fields = {
  name: {
    type: 'string',
    required: true,
  },
  contact: {
    type: 'search',
    label: 'contact',
    entity: 'people',
    displayLabels: ['firstname', 'lastname'],
    searchFields: 'firstname,lastname',
    dataIndex: ['contact', 'firstname'],
    redirectLabel: 'Add New Contact',
    withRedirect: true,
    urlToRedirect: '/people',
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
  website: {
    type: 'url',
  },
};

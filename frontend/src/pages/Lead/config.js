export const fields = {
  branch: {
    type: 'async',
    label: 'branch',
    entity: 'branch',
    displayLabels: ['name'],
    searchFields: 'name',
    dataIndex: ['branch', 'name'],
  },
  type: {
    type: 'select',
    options: [
      { value: 'People', label: 'People' },
      { value: 'Company', label: 'Company' },
    ],
  },
  name: {
    type: 'string',
    required: true,
  },
  status: {
    type: 'select',
    options: [
      { value: 'New', label: 'New' },
      { value: 'Qualified', label: 'Qualified' },
      { value: 'In Negociation', label: 'In Negociation' },
      { value: 'Won', label: 'Won' },
      { value: 'Lost', label: 'Lost' },
    ],
  },
  source: {
    type: 'select',
    options: [
      { value: 'Website', label: 'Website' },
      { value: 'Linkedin', label: 'Linkedin' },
      { value: 'Social Media', label: 'Social Media' },
      { value: 'Advertising', label: 'Advertising' },
      { value: 'Professionals Network', label: 'Professionals Network' },
      { value: 'Customer Referral', label: 'Customer Referral' },
      { value: 'Sales', label: 'Sales' },
    ],
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
  project: {
    type: 'textarea',
  },
};

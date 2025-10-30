export const fields = {
  enabled: {
    type: 'boolean',
  },
  name: {
    type: 'string',
    required: true,
  },
  link: {
    type: 'string',
    required: true,
  },
  table: {
    type: 'string',
    required: true,
  },
  autoReply: {
    type: 'boolean',
  },
  autoReplyTitle: {
    type: 'string',
  },
  autoReplyEmail: {
    type: 'email',
  },
  autoReplyMessage: {
    type: 'textarea',
  },
  branch: {
    type: 'search',
    label: 'branch',
    entity: 'branch',
    displayLabels: ['name'],
    searchFields: 'name',
    dataIndex: ['branch', 'name'],
  },
  color: {
    type: 'color',
    options: [
      { value: 'red', label: 'Red', color: 'red' },
      { value: 'volcano', label: 'Volcano', color: 'volcano' },
      { value: 'orange', label: 'Orange', color: 'orange' },
      { value: 'gold', label: 'Gold', color: 'gold' },
      { value: 'lime', label: 'Lime', color: 'lime' },
      { value: 'green', label: 'Green', color: 'green' },
      { value: 'cyan', label: 'Cyan', color: 'cyan' },
      { value: 'blue', label: 'Blue', color: 'blue' },
      { value: 'geekblue', label: 'Geek Blue', color: 'geekblue' },
      { value: 'purple', label: 'Purple', color: 'purple' },
      { value: 'magenta', label: 'Magenta', color: 'magenta' },
    ],
  },
};

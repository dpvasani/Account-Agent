export const fields = {
  currencyName: {
    type: 'string',
    required: true,
  },
  currencyCode: {
    type: 'string',
    required: true,
  },
  currencySymbol: {
    type: 'string',
    required: true,
  },
  currencyPosition: {
    type: 'select',
    options: [
      { value: 'before', label: 'Before' },
      { value: 'after', label: 'After' },
    ],
  },
  decimalSeparator: {
    type: 'string',
    defaultValue: '.',
  },
  thousandSeparator: {
    type: 'string',
    defaultValue: ',',
  },
  centPrecision: {
    type: 'number',
  },
  zeroFormat: {
    type: 'string',
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
  enabled: {
    type: 'boolean',
  },
};

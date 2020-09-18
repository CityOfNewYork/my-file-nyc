module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Name:',
    validate(value) {
      if (!value.length) {
        return 'Components must have a name.'
      }
      if (!/[a-z][A-Z]/.test(value)) {
        return 'Component names should contain at least two words to avoid conflicts with existing and future HTML elements.'
      }
      return true
    },
  },
  {
    type: 'multiselect',
    name: 'blocks',
    message: 'Blocks:',
    initial: ['template', 'script', 'style'],
    choices: [
      {
        name: 'template',
        message: '<template>',
      },
      {
        name: 'script',
        message: '<script>',
      },
      {
        name: 'style',
        message: '<style>',
      },
    ],
    validate(value) {
      if (!value.includes('script') && !value.includes('template')) {
        return 'Components require at least a <script> or <template> tag.'
      }
      return true
    },
  },
]

/** @type {import('plop').PlopGenerator} */
const config = {
  description: 'Create a React Component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your component name?',
    },
  ],
  actions: [
    {
      type: 'addMany',
      destination: '../src/components/{{pascalCase name}}',
      templateFiles: 'templates/component',
      base: 'templates/component',
    },
    {
      type: 'append',
      separator: '',
      path: '../src/components/index.ts',
      template: 'export { default as {{pascalCase name}} } from \'./{{pascalCase name}}\';\n',
    },
  ],
}

module.exports = config

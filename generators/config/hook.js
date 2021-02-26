/** @type {import('plop').PlopGenerator} */
const config = {
  description: 'Create a React hook',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your hook name?',
    },
  ],
  actions: [
    {
      type: 'add',
      path: '../src/hooks/{{camelCase name}}/index.ts',
      templateFile: 'templates/hook/index.ts.hbs',
    },
    {
      type: 'append',
      separator: '',
      path: '../src/hooks/index.ts',
      template: 'export { {{camelCase name}} } from \'./{{camelCase name}}\';\n',
    },
  ],
}

module.exports = config

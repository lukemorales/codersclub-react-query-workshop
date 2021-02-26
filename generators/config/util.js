/** @type {import('plop').PlopGenerator} */
const config = {
  description: 'Create an util function',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your util name?',
    },
  ],
  actions: [
    {
      type: 'add',
      path: '../src/utils/{{kebabCase name}}/index.tsx',
      templateFile: 'templates/util/index.ts.hbs',
    },
    {
      type: 'append',
      separator: '',
      path: '../src/utils/index.ts',
      template: 'export { {{camelCase name}} } from \'./{{kebabCase name}}\';\n',
    },
  ],
}

module.exports = config

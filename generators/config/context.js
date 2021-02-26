/** @type {import('plop').PlopGenerator} */
const config = {
  description: 'Create a React Context',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your context name?',
    },
  ],
  actions: [
    {
      type: 'add',
      path: '../src/contexts/{{kebabCase name}}/index.tsx',
      templateFile: 'templates/context/context.tsx.hbs',
    },
    {
      type: 'modify',
      path: '../src/contexts/index.tsx',
      pattern: /(\s+const\sAppProviders\s=\s)/gi,
      template: '\nimport { {{pascalCase name}}Provider } from \'./{{kebabCase name}}\';$1',
    },
    {
      type: 'modify',
      path: '../src/contexts/index.tsx',
      pattern: /(\s+)(\<\w+\>)(\{children\})/gi,
      template: '$1$2$1  <{{pascalCase name}}Provider>$3</{{pascalCase name}}Provider>$1',
    },
    {
      type: 'add',
      path: '../src/hooks/use{{pascalCase name}}/index.tsx',
      templateFile: 'templates/context/hook.tsx.hbs',
    },
    {
      type: 'append',
      separator: '',
      path: '../src/hooks/index.ts',
      template: 'export { use{{pascalCase name}} } from \'./use{{pascalCase name}}\';\n',
    },
  ],
}

module.exports = config

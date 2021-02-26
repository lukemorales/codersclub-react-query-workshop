/** @type {import('plop').PlopGenerator} */
const config = {
  description: 'Create a React Page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your page name?',
    },
  ],
  actions: [
    {
      type: 'addMany',
      destination: '../src/pages/{{pascalCase name}}',
      templateFiles: 'templates/page',
      base: 'templates/page',
    },
    {
      type: 'modify',
      path: '../src/routes/index.tsx',
      pattern: /(\s+import Route)/gi,
      template: '\nimport {{pascalCase name}} from \'@pages/{{pascalCase name}}\';$1',
    },
    {
      type: 'modify',
      path: '../src/routes/index.tsx',
      pattern: /(\s+)(\<\/Switch\>)/gi,
      template: '$1  <Route component={ {{~pascalCase name~}} } path="/{{kebabCase name}}" private />$1$2',
    },
  ],
}

module.exports = config

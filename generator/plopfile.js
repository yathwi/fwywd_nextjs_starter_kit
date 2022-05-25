module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Which type name is it? => src/component/${project}/${type}/${component} :',
        choices: [
          { name: 'part', value: 'part' },
          { name: 'template', value: 'template' },
          { name: 'view', value: 'view' },
        ],
      },
      {
        type: 'input',
        name: 'project',
        message:
          'What is a project name? => src/component/${project}/${type}/${component} * 共通は common :',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is a component name? => src/component/${project}/${type}/${component} :',
      },
    ],
    actions: (data) => {
      const path = `../src/component/${data.project}/${data.type}/`;

      switch (data.type) {
        case 'part':
          return [
            // component
            {
              type: 'add',
              path: path + '{{pascalCase name}}/index.tsx',
              templateFile: 'template/part.index.tsx.hbs',
            },
            // props for test and storybook
            {
              type: 'add',
              path: path + '{{pascalCase name}}/{{pascalCase name}}.props.ts',
              templateFile: 'template/part.props.ts.hbs',
            },
            // test
            {
              type: 'add',
              path: path + '{{pascalCase name}}/{{pascalCase name}}.test.tsx',
              templateFile: 'template/part.test.tsx.hbs',
            },
            // storybook
            {
              type: 'add',
              path: path + '{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
              templateFile: 'template/part.stories.tsx.hbs',
            },
          ];
        case 'template':
          return [
            // container
            {
              type: 'add',
              path: path + '{{pascalCase name}}/index.ts',
              templateFile: 'template/template.index.ts.hbs',
            },
            // test for container
            {
              type: 'add',
              path: path + '{{pascalCase name}}/index.test.tsx',
              templateFile: 'template/template.test.tsx.hbs',
            },
            // hooks
            {
              type: 'add',
              path: path + '{{pascalCase name}}/hooks.ts',
              templateFile: 'template/template.hooks.ts.hbs',
            },
            // test for hooks
            {
              type: 'add',
              path: path + '{{pascalCase name}}/hooks.test.tsx',
              templateFile: 'template/template.hooks.test.tsx.hbs',
            },
            // presenter
            {
              type: 'add',
              path: path + '{{pascalCase name}}/{{pascalCase name}}.tsx',
              templateFile: 'template/template.component.tsx.hbs',
            },
            // test for presenter
            {
              type: 'add',
              path: path + '{{pascalCase name}}/{{pascalCase name}}.test.tsx',
              templateFile: 'template/template.test.tsx.hbs',
            },
            // props for test and storybook
            {
              type: 'add',
              path: path + '{{pascalCase name}}/{{pascalCase name}}.props.ts',
              templateFile: 'template/template.props.ts.hbs',
            },
            // storybook
            {
              type: 'add',
              path: path + '{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
              templateFile: 'template/template.stories.tsx.hbs',
            },
          ];
        case 'view':
          return [
            // container
            {
              type: 'add',
              path: path + '{{pascalCase name}}/index.ts',
              templateFile: 'template/template.index.ts.hbs',
            },
            // test for container
            {
              type: 'add',
              path: path + '{{pascalCase name}}/index.test.tsx',
              templateFile: 'template/template.test.tsx.hbs',
            },
            // hooks
            {
              type: 'add',
              path: path + '{{pascalCase name}}/hooks.ts',
              templateFile: 'template/template.hooks.ts.hbs',
            },
            // test for hooks
            {
              type: 'add',
              path: path + '{{pascalCase name}}/hooks.test.tsx',
              templateFile: 'template/template.hooks.test.tsx.hbs',
            },
            // presenter
            {
              type: 'add',
              path: path + '{{pascalCase name}}/{{pascalCase name}}.tsx',
              templateFile: 'template/template.component.tsx.hbs',
            },
            // test for presenter
            {
              type: 'add',
              path: path + '{{pascalCase name}}/{{pascalCase name}}.test.tsx',
              templateFile: 'template/template.test.tsx.hbs',
            },
            // props for test and storybook
            {
              type: 'add',
              path: path + '{{pascalCase name}}/{{pascalCase name}}.props.ts',
              templateFile: 'template/template.props.ts.hbs',
            },
            // storybook
            {
              type: 'add',
              path: path + '{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
              templateFile: 'template/template.stories.tsx.hbs',
            },
          ];
        default:
          return [];
      }
    },
  });
};

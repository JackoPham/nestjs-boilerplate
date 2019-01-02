/**
 * Container Generator
 */

// const componentExists = require('../utils/componentExists');
const fs = require('fs');
const path = require('path');
module.exports = {
  description: 'Add a other class',
  prompts: [{
      type: 'list',
      name: 'type',
      message: 'Select the type:',
      default: 'All',
      choices: () => [
        'All',
        'Controller',
        'Business',
        'Entity',
        'Module',
        'Provider',
      ],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      validate: value => {
        if (!value) {
          return 'The name is required';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'database',
      message: 'What is database?',
      validate: value => {
        if (!value) {
          return 'The database is required';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'provider',
      message: 'What is provider?',
      validate: value => {
        if (!value) {
          return 'The provider is required';
        }
        return true;
      },
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [];
    switch (data.type) {
      case 'All':
        {
          actions.push({
            type: 'add',
            path: '../../../src/controllers/{{lowerCase name}}.controller.ts',
            templateFile: './components/controller.js.hbs',
            abortOnFail: true,
            skipIfExists: true,
          }, {
            type: 'add',
            path: '../../../src/app/business/{{lowerCase name}}.service.ts',
            templateFile: './components/business.js.hbs',
            abortOnFail: true,
            skipIfExists: true,
          }, {
            type: 'add',
            path: '../../../src/app/provider/{{lowerCase name}}.provider.ts',
            templateFile: './components/provider.js.hbs',
            abortOnFail: true,
            skipIfExists: true,
          }, {
            type: 'add',
            path: '../../../src/app/module/{{lowerCase name}}.module.ts',
            templateFile: './components/module.js.hbs',
            abortOnFail: true,
            skipIfExists: true,
          }, {
            type: 'add',
            path: '../../../src/app/business/interfaces/I{{lowerCase name}}.business.ts',
            templateFile: './components/ibusiness.js.hbs',
            abortOnFail: true,
            skipIfExists: true,
          }, {
            type: 'add',
            path: '../../../src/app/entity/{{lowerCase name}}.entity.ts',
            templateFile: './components/entity.js.hbs',
            abortOnFail: true,
          }, {
            type: 'add',
            path: '../../../src/app/repository/{{lowerCase name}}.repository.ts',
            templateFile: './components/repository.js.hbs',
            abortOnFail: true,
            skipIfExists: true,
          });
          break;
        }
      case 'Business':
        {
          actions.push({
            type: 'add',
            path: '../../../src/app/business/{{lowerCase name}}.service.ts',
            templateFile: './components/business.js.hbs',
            abortOnFail: true,
          }, {
            type: 'add',
            path: '../../../src/app/business/interfaces/I{{lowerCase name}}.business.ts',
            templateFile: './components/ibusiness.js.hbs',
            abortOnFail: true,
            skipIfExists: true,
          });
          break;
        }
      case 'Entity':
        {
          actions.push({
            type: 'add',
            path: '../../../src/app/entity/{{lowerCase name}}.entity.ts',
            templateFile: './components/entity.js.hbs',
            abortOnFail: true,
            skipIfExists: true,
          });
          break;
        }
      case 'Controller':
        {
          actions.push({
            type: 'add',
            path: '../../../src/controllers/{{lowerCase name}}.controller.ts',
            templateFile: './components/controller.js.hbs',
            abortOnFail: true,
          });
          break;
        }
      case 'Repository':
        {
          actions.push({
            type: 'add',
            path: '../../../src/app/repository/{{lowerCase name}}.repository.ts',
            templateFile: './components/repository.js.hbs',
            abortOnFail: true,
            skipIfExists: true,
          });
          break;
        }
      case 'Module':
        {
          actions.push({
            type: 'add',
            path: '../../../src/app/module/{{lowerCase name}}.module.ts',
            templateFile: './components/module.js.hbs',
            abortOnFail: true,
            skipIfExists: true,
          });
          break;
        }
      case 'Provider':
        {
          actions.push({
            type: 'add',
            path: '../../../src/app/provider/{{lowerCase name}}.provider.ts',
            templateFile: './components/provider.js.hbs',
            abortOnFail: true,
            skipIfExists: true,
          });
          break;
        }
      default:
        {
          actions.push({
            type: 'add',
            path: '../../../src/app/entity/{{lowerCase name}}.entity.ts',
            templateFile: './components/entity.js.hbs',
            abortOnFail: true,
            skipIfExists: true,
          });
          break;
        }
    }

    capitalize = function (value) {
      if (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
      return '';
    };

    if (data.database !== 'none' && data.provider !== 'none') {
      let fileTemplate = '../../../system/enums/database.enum.ts';
      const fie = path.join(__dirname, fileTemplate);
      if (fs.statSync(fie)) {
        let contentMesage = '';
        const contentOrigin = fs.readFileSync(fie, 'utf8');
        const lines = contentOrigin.split('\n');
        for (let line of lines) {
          line = line.replace(/\n|\r/g, '');
          contentMesage = contentMesage + line + '\r\n';
          if (
            line.indexOf('// Database') >= 0 &&
            contentOrigin.indexOf(data.database.toUpperCase()) < 0
          ) {
            contentMesage =
              contentMesage +
              `\tstatic readonly ${data.database.toUpperCase()}: string = 'Db${capitalize(
              data.database
            )}Connection'` +
              ';\r\n';
          }
          const provider = data.provider + '_PROVIDER';
          if (
            line.indexOf('// PROVIDER') >= 0 &&
            contentOrigin.indexOf(provider.toUpperCase()) < 0
          ) {
            contentMesage =
              contentMesage +
              `\tstatic readonly ${data.provider.toUpperCase()}_PROVIDER: string = '${capitalize(
              data.provider
            )}RepositoryToken'` +
              ';\r\n';
          }
        }
        fs.writeFileSync(fie, contentMesage);
      }
    }
    // actions.push({
    //     type: 'prettify',
    //     path: '/containers/',
    // });

    return actions;
  },
};
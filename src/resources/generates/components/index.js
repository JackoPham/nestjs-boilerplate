/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
    description: 'Add a other class',
    prompts: [{
        type: 'list',
        name: 'type',
        message: 'Select the type:',
        default: 'All',
        choices: () => ['All', 'Controller', 'Business', 'Entity','Module','Provider'],
    },
    {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Form',
        // validate: value => {
        //     if (/.+/.test(value)) {
        //         let result = componentExists(value);
        //         return result !== '' ? result : true;
        //     }

        //     return 'The name is required';
        // },
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
                path: '../../../src/controllers/{{properCase name}}Controller.ts',
                templateFile: './components/controller.js.hbs',
                abortOnFail: true,
            }, {
                type: 'add',
                path: '../../../src/app/business/{{lowerCase name}}.business.ts',
                templateFile: './components/business.js.hbs',
                abortOnFail: true,
            },
            {
                type: 'add',
                path: '../../../src/app/provider/{{lowerCase name}}.provider.ts',
                templateFile: './components/provider.js.hbs',
                abortOnFail: true,
            }, 
            {
                type: 'add',
                path: '../../../src/app/module/{{lowerCase name}}.module.ts',
                templateFile: './components/module.js.hbs',
                abortOnFail: true,
            },  {
                type: 'add',
                path: '../../../src/app/business/interfaces/I{{lowerCase name}}.business.ts',
                templateFile: './components/ibusiness.js.hbs',
                abortOnFail: true,
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
            });
            break;
        }
        case 'Business':
        {
            actions.push({
                type: 'add',
                path: '../../../src/app/business/{{properCase name}}Business.ts',
                templateFile: './components/business.js.hbs',
                abortOnFail: true,
            }, {
                type: 'add',
                path: '../../../src/app/business/interfaces/I{{properCase name}}Business.ts',
                templateFile: './components/ibusiness.js.hbs',
                abortOnFail: true,
            });
            break;
        }
        case 'Entity':
        {
            actions.push({
                type: 'add',
                path: '../../../src/app/entity/{{properCase name}}Entity.ts',
                templateFile: './components/entity.js.hbs',
                abortOnFail: true,
            });
            break;
        }
        case 'Controller':
        {
            actions.push({
                type: 'add',
                path: '../../../src/controllers/{{properCase name}}.controller.ts',
                templateFile: './components/controller.js.hbs',
                abortOnFail: true,
            });
            break;
        }
        case 'Repository':
        {
            actions.push({
                type: 'add',
                path: '../../../src/app/repository/{{properCase name}}Repository.ts',
                templateFile: './components/repository.js.hbs',
                abortOnFail: true,
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
            });
            break;
        }
        default:
        {
            actions.push({
                type: 'add',
                path: '../../../src/app/entity/{{properCase name}}Entity.ts',
                templateFile: './components/entity.js.hbs',
                abortOnFail: true,
            });
            break;
        }
        }

        // actions.push({
        //     type: 'prettify',
        //     path: '/containers/',
        // });

        return actions;
    },
};

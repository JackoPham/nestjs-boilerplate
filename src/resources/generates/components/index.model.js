/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
    description: 'Add a model wish string properties',
    prompts: [{
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
    // {
    //     type: 'confirm',
    //     name: 'wantEventStore',
    //     default: false,
    //     message: 'Do you want save event to database?',
    // },
    ],
    actions: data => {
        // Generate index.js and index.test.js
        const actions = [];
        actions.push({
            type: 'customAction',
            data: data
        });
        // actions.push(
        //     function customAction(plop, data) {
        //         console.log('data', plop, data);
        //         // move the current working directory to the plop file path
        //         // this allows this action to work even when the generator is
        //         // executed from inside a subdirectory
        //         process.chdir(plop.getPlopfilePath());

        //         // custom function can be synchronous or async (by returning a promise)
        //         let fs = require('fs');
        //         let existsMsg = 'psst {{name}}, change-me.txt already exists';
        //         let copiedMsg = 'hey {{name}}, I copied change-me.txt for you';
        //         let fileTemplate = './components/model.js.hbs';
        //         let changeFilePath = '../../../src/app/model/{{properCase name}}/{{properCase name}}Model.ts';

        //         // you can use plop.renderString to render templates
        //         existsMsg = plop.renderString(existsMsg, answers);
        //         copiedMsg = plop.renderString(copiedMsg, answers);

        //         if (fs.existsSync(changeFilePath)) {
        //             // returned value shows up in the console
        //             return existsMsg;
        //         }
        //         else {
        //             // do a synchronous copy via node fs
        //             fs.writeFileSync(changeFilePath, fs.readFileSync(fileTemplate));
        //             return copiedMsg;
        //         }
        //     },
        //     {
        //     type: 'add',
        //     path: '../../../src/controllers/{{properCase name}}Controller.ts',
        //     templateFile: './components/controller.js.hbs',
        //     abortOnFail: true,
        // }
        // );
        return actions;
    },
};

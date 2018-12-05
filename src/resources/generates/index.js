/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const path = require('path');
const {
    exec
} = require('child_process');
const componentGenerator = require('./components/index.js');
// const componentGeneratorController = require('./components/index.model.js');

module.exports = plop => {
    plop.setGenerator('systems', componentGenerator);
    plop.setGenerator('model', {
        description: 'Add a model wish string properties',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'What should it be called?',
            default: 'Form',
        },
        {
            type: 'input',
            name: 'properties',
            message: 'Enter array properties',
            validate: value => {
                if (!value) {
                    return 'Properties is required';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'dataType',
            message: 'Enter data type for properties',
            validate: (value, data) => {
                if (!value) {
                    return 'Data type is required';
                }
                if (data && value) {
                    let arrProperties = data.properties.split(',').map(String);
                    let arrDataType = value.split(',').map(String);
                    if (arrDataType.length !== arrProperties.length) {
                        return 'The number of the Properties is not equal to the number of data type';
                    }
                }
                return true;
            },
        }
        ],
        actions: [
            function customAction(data) {
                // move the current working directory to the plop file path
                // this allows this action to work even when the generator is
                // executed from inside a subdirectory
                process.chdir(plop.getPlopfilePath());

                let fileName = plop.getHelper('properCase')(data.name);
                let properties = data.properties.split(',').map(String);
                let dataTypes = data.dataType.split(',').map(String);
                let strProperties = '';
                properties.forEach((element, index) => {
                    strProperties += element + ':' + dataTypes[index] + ';\r\n';
                });
                data.properties = strProperties;
                // custom function can be synchronous or async (by returning a promise)
                let existsMsg = '';
                let fileTemplate = './components/model.js.hbs';
                let folderPath = path.join(__dirname, '../../../src/app/model/', fileName);
                let changeFilePath = path.join(folderPath, `${fileName}Model.ts`);

                let contentOrigin = fs.readFileSync(fileTemplate, 'utf8');
                // you can use plop.renderString to render templates
                existsMsg = plop.renderString(contentOrigin, data);

                if (!fs.existsSync(changeFilePath)) {
                    // returned value shows up in the console
                    fs.mkdirSync(folderPath);
                }
                // do a synchronous copy via node fs
                fs.writeFileSync(changeFilePath, existsMsg);
                return 'OK';
            }
        ]
    });
};

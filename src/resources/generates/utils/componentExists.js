/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');
const controllers = fs.readdirSync(path.join(__dirname, '../../../controllers'));
const business = fs.readdirSync(path.join(__dirname, '../../../app/business'));
const entitys = fs.readdirSync(path.join(__dirname, '../../../app/entity'));
const components = controllers.concat(business, entitys);

function componentExists(comp) {
    // console.log('components ==>', components);
    // console.log('componentExists ==>', comp);
    // return components.indexOf(comp) >= 0;
    let fullText = comp + 'Controller.ts';
    if (components.indexOf(fullText) >= 0) {
        return 'Name already exists in the controllers';
    }
    fullText = comp + 'Entity.ts';
    if (components.indexOf(fullText) >= 0) {
        return 'Name already exists in the business';
    }
    fullText = comp + 'Business.ts';
    if (components.indexOf(fullText) >= 0) {
        return 'Name already exists in the entity';
    }
    return '';
}

module.exports = componentExists;

import 'core-js';
import 'regenerator-runtime/runtime';
const performAction = require('../src/client/js/app.js');
describe('Test if performAction() exists', () => {
    test('It should be defined', async () => {
        expect(performAction).toBeDefined();
    });
});
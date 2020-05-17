import 'core-js';
import 'regenerator-runtime/runtime';
const request = require('supertest');
const app = require('../src/server/server.js');


describe('Test the root server path', () => {
    test('status code should be 200', async () => {
        const result = await request(app).get('/getdata')

        expect(result.statusCode).toBe(200);
    });
    
});
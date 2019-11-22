const request = require('supertest');
const app = require('./app.js')
describe('Test the content path', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/comments').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});
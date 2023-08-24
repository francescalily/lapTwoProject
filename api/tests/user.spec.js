const request = require('supertest');
const app = require("../api")

describe('User Controller', () => {
    it('should register a new user', async () => {
        const response = await request(app)
        .post('/users/register')
        .send({
            username: 'tester',
            email: 'test@testing.com',
            password: 'test123'
        });
    expect(response.status).toBe(201);
    })

    it('should login with existing user credentials', async () => {
        const response = await request(app)
        .post('/users/login')
        .send({
            email: 'test@testing.com',
            password: 'test123'
        });
    expect(response.status).toBe(200);
    })
});

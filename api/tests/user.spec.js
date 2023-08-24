const request = require('supertest');
const app = require("../api");

describe('User Controller', () => {
    it('should register a new user', async () => {
        const response = await request(app)
        .post('/users/register')
        .send({
            username: 'tester5',
            email: 'test5@testing.com',
            password: 'test123'
        });
    expect(response.status).toBe(201);
    })

    it('Can login with existing user login credentials', async () => {
        const response = await request(app)
        .post('/users/login')
        .send({
            email: 'test5@testing.com',
            password: 'test123'
        });
        console.log(response);
    expect(response.status).toBe(200);
    })

    it ('Prompt user when wrong login credentials submitted', async () => {
        const response = await request(app)
        .post('/user/login')
        .send({
            email: "fake@imail.com",
            password: "wrong"
        })
    expect(response.text).toBe("Wrong login details");
    })

});

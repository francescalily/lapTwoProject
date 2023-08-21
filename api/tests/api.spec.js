const request = require("supertest");

const app = require("../api");
describe("api server", () => {
  let api;

  beforeAll(() => {
    api = app.listen(5000, () => {
      console.log(`Test running on port 5000`);
    });
  });

  afterAll((done) => {
    console.log("Test server stopping");
    api.close(done);
  });

  test("it responds to get / with status 200", (done) => {
    request(api).get("/").expect(200, done);
    //always have to put done ass the parameters. this test will pass if gets 200 status
  });
  test("responds to invalid method request with 405", (done) => {
    request(api).post("/").expect(405, done);
  }); //checking the invalid post, can be written like this as well in sections
});

//WILL BE CHANGEND TO FUNCTIONS WHERE MATCHES ROUTES

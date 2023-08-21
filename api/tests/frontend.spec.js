const { renderDom } = require("./helpers");

let dom;
let document;

//FRONT END TESTING GOES HERE - WILL BE CHANGED TO FRONTEND FUNCTIONS. EG:

describe("index.html", () => {
  beforeEach(async () => {
    dom = await renderDom("../client/index.html");
    document = await dom.window.document;
  });

  //FUNCTIONS BELOW GO IN HERE WHEN APPLICABLE TO LAPTWO PROJECT TESTING
});

//   it("has a button", () => {
//     const btn = document.querySelector("button");
//     expect(btn).toBeTruthy;
//   });

//   it("h1 is empty when the website loads", () => {
//     const h1 = document.querySelector("h1");
//     expect(h1.innerHTML).toContain(""); //do not send tests to github etc innerHTML not good
//   });

//   it("displays morning when the btn is clicked", () => {
//     const btn = document.querySelector("button");
//     btn.click(); //simulating action here
//     const h1 = document.querySelector("h1"); //need to define it because it is not in our scope
//     expect(h1.innerHTML).toContain("morning"); //checking it has morning
//   });
// });

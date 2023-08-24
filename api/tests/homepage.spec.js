const path = require("path");
const jsdom = require("jsdom");

const { JSDOM } = jsdom;

const renderDom = async (filename) => {
  const filePath = path.join(process.cwd(), filename);
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: "dangerously",
    resources: "usable",
  });

  return new Promise((resolve, _) => {
    dom.window.document.addEventListener("DOMContentLoaded", () => {
      resolve(dom);
    });
  });
};

let dom;
let document;

describe('homepage.html', () => {
    beforeEach(async() => {
        dom = await renderDom('./client/homepage.html')
        document = await dom.window.document;
    })

    it('check if title is correct', () => {
        const h2Wel = document.getElementById("welcome-txt");
        const h2To = document.getElementById("welcome-to");
        const h2Florin = document.getElementById("welcome-florin");

        const title = h2Wel.innerHTML + ' ' + h2To.innerHTML + ' ' + h2Florin.innerHTML
        expect(title).toContain("Welcome to Florin")
    })

    it('check if it is a button', () => {
        const btn = document.getElementById("login-btn")
        expect(btn).toBeTruthy()
    })

    const validateElementStructure = () => {
        const title = document.querySelector('title');
        const nav = document.querySelector('nav');
        const section = document.querySelector('section');

        console.log(title !== null && nav !== null && section !== null)
        return title !== null && nav !== null && section !== null
        
    }

    it('validate format and structure, by checking elements exist', () => {
        expect(validateElementStructure()).toBeTruthy();
    })
})
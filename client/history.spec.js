const path = require('path');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const renderDom = async (filename) => {
  const filePath = path.join(process.cwd(), filename)
  const dom = await JSDOM.fromFile(filePath,{
      runScripts: 'dangerously',
      resources: 'usable'
  })
  return new Promise((resolve, _)=> {
      dom.window.document.addEventListener('DOMContentLoaded', () => {
          resolve(dom);
      })
  })
}


let dom;
let document;


    describe('history.html', () => {
      beforeEach(async() => {
        dom = await renderDom('/client/history.html')
        document = await dom.window.document;
      })

      it('SVGs exist', () => {
        const svg = document.querySelector('path');
        expect(svg).toBeTruthy;
      }) 
     it('Arrow buttons change photo', () => {
      const arrowButtons = document.querySelector('.arrow')
      arrowButtons.click()
      const image = document.querySelector('#image')
      expect(image.src).not.toBe(null);
     })
     it('Icons display is empty by default', () => {
  
      const war = document.querySelector('#war');
      const building = document.querySelector('#building');
      const woods = document.querySelector('#woods');
      expect(war.style.display).toBe('');
      expect(building.style.display).toBe('');
      expect(woods.style.display).toBe('');


     })
  });


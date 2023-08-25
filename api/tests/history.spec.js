const path = require('path');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

describe('DOM Manipulation', () => {
    // Test case 1: Check if svg1 click event updates styles
    it('should update styles on svg1 click event', () => {
      const svg1 = document.createElement('div');
      svg1.id = 'svg1';
      document.body.appendChild(svg1);
  
      const clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      });
      svg1.dispatchEvent(clickEvent);
  
      assert.equal(svg1.style.transform, 'scale(1.55)');
      assert.equal(svg1.style.transition, 'transform 0.7s ease');
      assert.equal(svg1.style.fill, 'red');
    });
     // Test case 2: Check if content_svg1 is displayed on svg1 click event
  it('should display content_svg1 on svg1 click event', () => {
    const content_svg1 = document.createElement('div');
    content_svg1.id = 'content-svg1';
    document.body.appendChild(content_svg1);

    const svg1 = document.createElement('div');
    svg1.id = 'svg1';
    document.body.appendChild(svg1);

    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    });
    svg1.dispatchEvent(clickEvent);

    assert.equal(content_svg1.classList.contains('hidden'), false);
  });

  // Test case 3: Check if description text is updated on left arrow click event
  it('should update description text on left arrow click event', () => {
    const description = document.createElement('div');
    description.id = 'image-description';
    document.body.appendChild(description);

    const leftArrow = document.createElement('div');
    leftArrow.className = 'left-arrow';
    document.body.appendChild(leftArrow);

    const images = ['./assets/download.jpeg', 'image2.jpg', 'image3.jpg'];
    const descriptions = [
      'This place is fukkkkin magical',
      'May the lord bless this place',
      'Damn ok bro we get it',
    ];
    let currentIndex = 1;

    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    });
    leftArrow.dispatchEvent(clickEvent);

    assert.equal(description.textContent, descriptions[currentIndex]);
  });
});

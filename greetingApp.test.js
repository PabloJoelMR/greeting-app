const { JSDOM } = require('jsdom');
const { submitName } = require('./public/greetingApp');

// Create a new JSDOM instance
const dom = new JSDOM(`
  <!DOCTYPE html>
  <body>
    <input type="text" id="nameInput" value="Pablo">
    <h2 id="greetingMessage"></h2>
  </body>
`);

// Use the window object of the JSDOM instance
global.window = dom.window;
global.document = window.document;

test('submitName', () => {
  submitName();
  expect(document.getElementById('greetingMessage').innerText).toBe('Hello, Pablo!');
});
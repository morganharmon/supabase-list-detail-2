import './example.test.js';
import { renderJuice } from '../render-utils.js';
import { renderDetails } from '../render-utils.js';
import { fetchItemDataById } from '../fetch-utils.js';

const test = QUnit.test;

test('renderJuice should output a div with an item name, image, and hyperlink', (expect) => {
    const expected = '<div><a href="./juices/index.html?id=2"><h2>Apple juice</h2></a><img src="./assets/apple-juice.jpg" alt="Apple juice"></div>';
    const actual = renderJuice({ id: 2, type: 'Apple', color: 'brown', vitamins: 'vitamin B6', image: './assets/apple-juice.jpg' });
    expect.equal(actual.outerHTML, expected);
});

test('renderDetails should output a div with an item name, image, and additional info', (expect) => {
    const expected = '<div><h2>Apple juice</h2><img src="./assets/apple-juice.jpg" alt="Apple juice"><p>Apple juice is brown and is full of vitamin B6.</p></div>';
    const actual = renderDetails({ id: 2, type: 'Apple', color: 'brown', vitamins: 'vitamin B6', image: './assets/apple-juice.jpg' });
    expect.equal(actual.outerHTML, expected);
});
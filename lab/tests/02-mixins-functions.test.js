/**
 * @jest-environment node
 */

const fs = require('fs');
const path = require('path');

let scssContent;

beforeAll(() => {
  const scssPath = path.join(__dirname, '..', 'scss', 'exercises', '_02-mixins-functions.scss');
  scssContent = fs.readFileSync(scssPath, 'utf8')
    .replace(/\s+/g, ' ') // collapse whitespace
    .substring(0, 500);   // limit output
});

describe('Exercise 2: Mixins & Functions', () => {

  test('should define responsive-font, spacing, and candy-color functions', () => {
    const functions = ['responsive-font', 'spacing', 'candy-color'];
    functions.forEach(fn => {
      const regex = new RegExp(`@function\\s+${fn}`, 'i');
      expect(scssContent).toMatch(regex);
    });
  });

  test('should define button-style, card-layout, and flex-container mixins', () => {
    const mixins = ['button-style', 'card-layout', 'flex-container'];
    mixins.forEach(mixin => {
      const regex = new RegExp(`@mixin\\s+${mixin}`, 'i');
      expect(scssContent).toMatch(regex);
    });
  });

  test('should apply button-style mixin to .btn classes', () => {
    const btnClasses = ['.btn', '.btn-primary', '.btn-secondary', '.btn-accent'];
    btnClasses.forEach(cls => {
      const regex = new RegExp(cls.replace('.', '\\.'), 'i');
      expect(scssContent).toMatch(regex);
    });
  });

  test('should apply card-layout mixin to cards and sections', () => {
    const cardSelectors = ['.candy-item', '.featured-section', '.responsive-card', '.shop-header', '.responsive-section'];
    cardSelectors.forEach(sel => {
      const regex = new RegExp(sel.replace('.', '\\.'), 'i');
      expect(scssContent).toMatch(regex);
    });
  });

  test('should apply flex-container mixin to layout grids', () => {
    const flexSelectors = ['.shop-buttons', '.candy-grid'];
    flexSelectors.forEach(sel => {
      const regex = new RegExp(sel.replace('.', '\\.'), 'i');
      expect(scssContent).toMatch(regex);
    });
  });

  test('should include responsive media queries', () => {
    expect(scssContent).toMatch(/@media\s*\(max-width: 768px\)/i);
    expect(scssContent).toMatch(/@media\s*\(min-width: 1024px\)/i);
  });

});

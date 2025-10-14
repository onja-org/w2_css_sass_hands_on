/**
 * @jest-environment node
 */

const fs = require('fs');
const path = require('path');

const partials = [
  '_variables.scss',
  '_mixins.scss',
  '_base.scss',
  '_buttons.scss',
  '_navigation.scss',
  '_hero.scss',
  '_categories.scss',
  '_newsletter.scss',
  '_footer.scss'
];

let scssContent;

beforeAll(() => {
  const mainScssPath = path.join(__dirname, '..', 'scss', 'exercises', '_03-partials-imports.scss');
  scssContent = fs.readFileSync(mainScssPath, 'utf8')
    .replace(/\s+/g, ' ') // collapse whitespace
    .substring(0, 500);   // limit to first 500 chars for test output
});

describe('Exercise 3: Partials & Imports', () => {

  test('should have all partial files created', () => {
    partials.forEach(file => {
      const filePath = path.join(__dirname, '..', 'scss', 'exercises', 'partials', file);
      expect(fs.existsSync(filePath)).toBe(true);
    });
  });

  test('should contain @use statements for all partials in main SCSS', () => {
    partials.forEach(file => {
      const partialName = file.replace(/^_/, '').replace(/\.scss$/, '');
      const regex = new RegExp(`@use\\s+['"]partials/${partialName}['"]`, 'i');
      expect(scssContent).toMatch(regex);
    });
  });

  test('should import partials in the correct order', () => {
    const order = [
      'variables',
      'mixins',
      'base',
      'buttons',
      'navigation',
      'hero',
      'categories',
      'newsletter',
      'footer'
    ];

    let lastIndex = -1;
    order.forEach(partial => {
      const regex = new RegExp(`@use\\s+['"]partials/${partial}['"]`, 'i');
      const match = scssContent.match(regex);
      expect(match).not.toBeNull();
      const currentIndex = match.index;
      expect(currentIndex).toBeGreaterThan(lastIndex);
      lastIndex = currentIndex;
    });
  });
});

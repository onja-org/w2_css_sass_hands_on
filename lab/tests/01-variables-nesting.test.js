/**
 * @jest-environment node
 */

const fs = require('fs');
const path = require('path');

let scssContent;

beforeAll(() => {
  const scssPath = path.join(__dirname, '..', 'scss', 'exercises', '_01-variables-nesting.scss');
  scssContent = fs.readFileSync(scssPath, 'utf8')
    .replace(/\s+/g, ' ') // collapse whitespace
    .substring(0, 500);   // limit for test output
});

describe('Exercise 1: Variables & Nesting', () => {

  test('should define color variables for each candy type', () => {
    const colors = ['lollipop', 'gummy', 'chocolate', 'cotton-candy'];
    colors.forEach(name => {
      const regex = new RegExp(`\\$${name}-color`, 'i');
      expect(scssContent).toMatch(regex);
    });
  });

  test('should define typography variables', () => {
    const typography = ['primary-font', 'heading-size', 'price-size'];
    typography.forEach(name => {
      const regex = new RegExp(`\\$${name}`, 'i');
      expect(scssContent).toMatch(regex);
    });
  });

  test('should define spacing variables', () => {
    const spacing = ['card-padding', 'card-margin', 'border-radius'];
    spacing.forEach(name => {
      const regex = new RegExp(`\\$${name}`, 'i');
      expect(scssContent).toMatch(regex);
    });
  });

  test('should use nesting inside .candy-card', () => {
    const nestedSelectors = [
      '.candy-card .candy-image',
      '.candy-card .candy-name',
      '.candy-card .candy-description',
      '.candy-card .candy-price',
      '.candy-card .buy-button'
    ];
    nestedSelectors.forEach(sel => {
      const regex = new RegExp(sel.replace(/\./g, '\\.'), 'i');
      expect(scssContent).toMatch(regex);
    });
  });

  test('should define card variants using &.lollipop, &.gummy, &.chocolate, &.cotton-candy', () => {
    const variants = ['lollipop', 'gummy', 'chocolate', 'cotton-candy'];
    variants.forEach(variant => {
      const regex = new RegExp(`&\\.${variant}`, 'i');
      expect(scssContent).toMatch(regex);
    });
  });

  test('should include hover effects for cards and buttons', () => {
    expect(scssContent).toMatch(/&:hover/i);
    expect(scssContent).toMatch(/\.buy-button\s*{[^}]*&:hover/i);
  });

});

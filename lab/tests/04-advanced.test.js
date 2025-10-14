/**
 * @jest-environment node
 */

const fs = require('fs');
const path = require('path');

let scssContent;

beforeAll(() => {
  const scssPath = path.join(__dirname, '..', 'scss', 'exercises', '_04-advanced.scss');
  scssContent = fs.readFileSync(scssPath, 'utf8')
    .replace(/\s+/g, ' ')  // collapse whitespace
    .substring(0, 500);    // limit output
});

describe('Exercise 4: Advanced SASS Features', () => {

  test('should define base variables and maps', () => {
    expect(scssContent).toMatch(/\$base-spacing/i);
    expect(scssContent).toMatch(/\$base-color/i);
    expect(scssContent).toMatch(/\$candy-themes/i);
    expect(scssContent).toMatch(/\$social-icons/i);
  });

  test('should use @use for sass modules', () => {
    ['sass:color', 'sass:math', 'sass:map'].forEach(mod => {
      expect(scssContent).toMatch(new RegExp(`@use\\s+"${mod}"`, 'i'));
    });
  });

  test('should include loops for generating utilities', () => {
    expect(scssContent).toMatch(/@for/i);
    expect(scssContent).toMatch(/@each/i);
  });

  test('should define theme-color function and theme-aware-card mixin', () => {
    expect(scssContent).toMatch(/@function\s+theme-color/i);
    expect(scssContent).toMatch(/@mixin\s+theme-aware-card/i);
  });

  test('should apply responsive-font function in headings', () => {
    expect(scssContent).toMatch(/responsive-font/i);
  });

  test('should define candy-card-advanced and utility classes', () => {
    ['.candy-card-advanced', '.utilities-demo', '.theme-demo', '.grid-demo', '.typography-demo'].forEach(sel => {
      expect(scssContent).toMatch(new RegExp(sel.replace('.', '\\.'), 'i'));
    });
  });

  test('should include conditional logic using @if/@else', () => {
    expect(scssContent).toMatch(/@if/i);
    expect(scssContent).toMatch(/@else/i);
  });

  test('should include color, math, and map built-in functions', () => {
    expect(scssContent).toMatch(/color\.adjust/i);
    expect(scssContent).toMatch(/math\./i);
    expect(scssContent).toMatch(/map\.get/i);
  });

});

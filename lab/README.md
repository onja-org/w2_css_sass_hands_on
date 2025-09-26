# 🍭 Candy Expo SASS Workshop

Welcome to the Candy Expo SASS Workshop! In this hands-on project, you'll learn CSS preprocessing by building a colorful candy exposition website.

## 🎯 What You'll Learn

- **SASS fundamentals**: Variables, nesting, mixins, functions
- **Project organization**: Partials, imports, and file structure
- **Build process**: How preprocessing fits into web development
- **Mental model**: Understanding the compile step and workflow

## 🧠 The SASS Mental Model

### What is SASS?
SASS (Syntactically Awesome StyleSheets) is a **CSS preprocessor**. Think of it as "CSS with superpowers" - it adds programming-like features to CSS that make styling more organized, maintainable, and fun!

### The Preprocessing Workflow
```
Write SASS (.scss files) → Compile → Get CSS → Browser uses CSS
```
"Compiling" just means the process of taking some input and transforming it into a different output.

**Key Mental Model**: You write enhanced CSS (SASS), then a tool transforms it into regular CSS that browsers can understand. It's like having a translator that turns your "advanced CSS" into "basic CSS" that works everywhere.

### Why Use SASS?
- **Variables**: Store colors, sizes, fonts in one place
- **Nesting**: Write CSS that mirrors your HTML structure
- **Mixins**: Create reusable chunks of CSS
- **Functions**: Calculate values dynamically
- **Partials**: Split your CSS into organized files
- **Modern module system**: Use `@use` instead of deprecated `@import`
- **No browser compatibility issues**: Compiles to standard CSS

## 🚀 Setup

1. **Install dependencies** (this downloads the SASS compiler):
   ```bash
   npm install
   ```
   Run this from the project root directory (where `package.json` is located).

2. **Start the build process** (this watches for changes and auto-compiles):
   ```bash
   npm run dev
   ```
   Keep this running in a terminal while you work!

3. **Understanding the file structure**:
   - `lab/scss/` - Your SASS source files (this is where you write code)
   - `lab/css/` - Compiled CSS files (auto-generated, don't edit these!)
   - `lab/exercises/` - Step-by-step learning exercises
   - `lab/final-project/` - Your candy expo website

## 📚 Exercises

Work through these exercises in order. Each builds on the previous one!

### Exercise 1: Variables and Nesting 🎨
**Goal**: Learn SASS variables and nesting syntax

**What you'll do**:
1. Open `lab/exercises/01-variables-nesting.html` in your browser
2. Edit `lab/scss/exercises/_01-variables-nesting.scss`
3. Create variables for candy colors and use nesting for card layouts

**Key concepts**:
- Variables store values you reuse: `$primary-color: #ff6b9d;`
- Nesting mirrors HTML structure and reduces repetition
- See the difference: write less SASS, get more CSS!

---

### Exercise 2: Mixins and Functions 🔧
**Goal**: Create reusable code chunks and calculations

**What you'll do**:
1. Open `lab/exercises/02-mixins-functions.html`
2. Edit `lab/scss/exercises/_02-mixins-functions.scss`
3. Create mixins for button styles and functions for responsive sizing

**Key concepts**:
- Mixins: Reusable groups of CSS declarations
- Functions: Return calculated values
- Parameters make mixins and functions flexible

---

### Exercise 3: Partials and Imports 📁
**Goal**: Organize code into logical files

**What you'll do**:
1. Open `lab/exercises/03-partials-imports.html`
2. Split your SASS into multiple files in `lab/scss/exercises/partials/`
3. Use `@import` to combine them

**Key concepts**:
- Partials start with `_` (like `_colors.scss`)
- `@import` combines files during compilation
- Organize by purpose: colors, typography, layout, components

---

### Exercise 4: Advanced Features 🎪
**Goal**: Use control structures and built-in functions

**What you'll do**:
1. Open `lab/exercises/04-advanced.html`
2. Edit `lab/scss/exercises/_04-advanced.scss`
3. Use loops to generate utility classes and conditionals for themes

**Key concepts**:
- `@for`, `@each` loops generate repetitive CSS
- `@if/@else` for conditional styles
- Built-in functions: `color.adjust()`, `mix()`

---

## 🎪 Bonus Final Project: Candy Expo Website (Stretch goal if time permits)

**Goal**: Build a complete candy exposition website using all SASS features!

**What you'll build**:
- Homepage with hero section
- Candy showcase grid
- Vendor directory
- Event schedule
- Responsive navigation

**Your mission**:
1. Open `lab/final-project/index.html`
2. Create a well-organized SASS architecture in `lab/scss/final-project/`
3. Use variables for your color palette and typography
4. Create mixins for buttons, cards, and layouts
5. Organize with partials (base, layout, components, pages)
6. Add responsive breakpoints and interactive elements

**SASS Architecture Example**:
```
lab/scss/final-project/
├── main.scss           # Imports everything
├── abstracts/
│   ├── _variables.scss # Colors, fonts, sizes
│   ├── _mixins.scss    # Reusable code chunks
│   └── _functions.scss # Calculations
├── base/
│   ├── _reset.scss     # CSS reset/normalize
│   └── _typography.scss # Font styles
├── layout/
│   ├── _header.scss    # Site header/nav
│   ├── _footer.scss    # Site footer
│   └── _grid.scss      # Layout systems
├── components/
│   ├── _buttons.scss   # Button styles
│   ├── _cards.scss     # Card components
│   └── _forms.scss     # Form elements
└── pages/
    ├── _home.scss      # Homepage specific
    └── _schedule.scss  # Schedule page specific
```

## 🛠️ Available Commands

- `npm run dev` - Watch for changes and auto-compile (use while coding)
- `npm run build-once` - Compile once and stop
- `npm run clean` - Delete compiled CSS files

## 💡 Tips for Success

1. **Keep `npm run dev` running** - It auto-compiles your SASS as you save
2. **Check the CSS output** - Look in the `lab/css/` folder to see what your SASS becomes
3. **Use your browser's dev tools** - Inspect elements to see the compiled CSS
4. **Start simple** - Don't try to use every feature at once
5. **Organize early** - Use partials from the beginning, even for small projects

## 🎉 What's Next?

After completing this workshop, you'll understand:
- How CSS preprocessing works and why it's valuable
- The mental model of the compile step
- How to organize larger CSS projects
- The most important SASS features and when to use them

**Next steps**: Try using SASS in your own projects! The workflow is always the same: write SASS, compile to CSS, use in HTML.

---

Ready to get started? Run `npm install` and `npm run dev`, then dive into Exercise 1! 🚀

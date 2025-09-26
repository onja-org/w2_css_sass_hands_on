# SASS Workshop Project Overview

## Project Description
This is a comprehensive hands-on SASS (Syntactically Awesome StyleSheets) workshop focused on learning CSS preprocessing through building a colorful candy exposition website. The workshop is structured to teach SASS fundamentals while creating practical, real-world projects.

## Learning Objectives
- Master SASS fundamentals: variables, nesting, mixins, and functions
- Understand CSS preprocessing workflow and mental model
- Learn proper project organization with partials and imports
- Practice advanced SASS features like control structures and built-in functions
- Build a complete responsive website using modern SASS architecture

## Project Structure

```
/                               # Root directory
├── package.json               # Project dependencies and build scripts  
├── README.md                  # Project overview
├── .gitignore                 # Git ignore rules
│
└── lab/                       # Main workshop directory
    ├── README.md              # Detailed workshop instructions
    │
    ├── exercises/             # Step-by-step learning exercises (HTML files)
    │   ├── 01-variables-nesting.html
    │   ├── 02-mixins-functions.html
    │   ├── 03-partials-imports.html
    │   └── 04-advanced.html
    │
    ├── final-project/         # Complete candy expo website
    │   └── index.html        # Main project HTML
    │
    └── scss/                 # SASS source files
        ├── exercises.scss    # Main exercise stylesheet
        ├── final-project.scss # Main project stylesheet
        ├── exercises/        # Exercise-specific SASS files
        │   ├── _01-variables-nesting.scss
        │   ├── _02-mixins-functions.scss
        │   ├── _03-partials-imports.scss
        │   ├── _04-advanced.scss
        │   └── partials/     # Shared components
        │       ├── _buttons.scss
        │       ├── _mixins.scss
        │       └── _variables.scss
        └── final-project/    # Project SASS architecture
            └── abstracts/    # Variables, mixins, functions
                ├── _functions.scss
                ├── _mixins.scss
                └── _variables.scss
```

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development mode:**
   ```bash
   npm run dev
   ```

3. **Open exercises in browser and start coding!**
   Navigate to `lab/exercises/` and open the HTML files in your browser.

## Workshop Progression

### Phase 1: Fundamentals
1. **Variables & Nesting** - Learn SASS basics and syntax
2. **Mixins & Functions** - Create reusable code components
3. **Partials & Imports** - Organize code into modular files
4. **Advanced Features** - Control structures and built-in functions

### Phase 2: Real-World Application
5. **Final Project** - Build a complete candy expo website using all learned concepts

## 🛠️ Available Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Watch for changes and auto-compile SASS |
| `npm run build-once` | Compile SASS once and stop |
| `npm run clean` | Remove compiled CSS files |

## Key Concepts Covered

- **SASS Preprocessing Workflow**: Write SASS → Compile → Get CSS
- **Variables**: Store and reuse values (`$primary-color: #ff6b9d`)
- **Nesting**: Mirror HTML structure in CSS
- **Mixins**: Reusable groups of CSS declarations
- **Functions**: Calculate and return values
- **Partials**: Modular file organization (files starting with `_`)
- **Modern Architecture**: Organized folder structure for scalable projects
- **Control Structures**: Loops (`@for`, `@each`) and conditionals (`@if`)

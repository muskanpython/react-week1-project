# React UI Component Library

## Project Overview

This project is a reusable React UI Component Library developed as part of the Week 2 internship task. It provides reusable interface components with configurable props, consistent styling, responsive layouts, and accessibility considerations.

## Technologies Used

- React
- JavaScript (JSX)
- CSS3
- Webpack
- Babel
- ESLint
- HTML5

## Project Structure

```text
react-week1-project/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       ├── Checkbox.jsx
│   │       ├── Card.jsx
│   │       ├── Modal.jsx
│   │       ├── FormField.jsx
│   │       └── index.jsx
│   ├── styles/
│   │   ├── main.css
│   │   └── components.css
│   ├── App.jsx
│   └── index.jsx
├── webpack.config.js
├── babel.config.cjs
├── package.json
└── README.md
```

## Components and Props

### 1. Button

A reusable button supporting different visual styles and sizes.

- `children`: Button label or content
- `variant`: `primary`, `secondary`, or `danger`
- `size`: `small`, `medium`, or `large`
- `type`: HTML button type
- `disabled`: Disables interaction
- `onClick`: Click event handler
- `className`: Additional CSS class

### 2. Input

A reusable input field with generated identification for label association.

- `id`: Optional input identifier
- `label`: Input label, if supported by the implementation
- `type`: Input type
- `value` and `onChange`: Controlled input properties
- `placeholder`: Placeholder text
- `disabled`: Disables the input
- `required`: Marks the field as required
- `className`: Additional CSS class

### 3. Checkbox

A reusable checkbox for selecting or toggling an option.

- `id`: Optional checkbox identifier
- `label`: Checkbox label, if supported by the implementation
- `checked` and `onChange`: Checkbox state and change handler
- `disabled`: Disables the checkbox
- `className`: Additional CSS class

### 4. Card

A reusable content container with optional sections.

- `title`: Card heading
- `description`: Supporting description
- `children`: Main card content
- `footer`: Optional footer content
- `className`: Additional CSS class

### 5. Modal

A dialog component for displaying focused content or actions.

- `isOpen`: Controls whether the modal is displayed
- `onClose`: Handles closing the modal
- `title`: Modal heading
- `children`: Modal content

The modal uses the native HTML dialog element and appropriate dialog labelling. Keyboard and focus behaviour should be checked in the target browser.

### 6. FormField

A wrapper for associating a form control with a label and optional help or error text.

- `label`: Field label
- `hint`: Supporting instructions
- `error`: Validation message
- `children`: Form control element

*Note: Confirm the supported props in each component's source code before relying on optional props in another project.*

## Accessibility

The library incorporates accessibility considerations such as:

- Semantic HTML elements where appropriate
- Labels and generated IDs for form controls
- Native button and input behaviour
- Disabled states for supported controls
- Dialog labelling for the modal
- Visible focus and readable text styling where provided by the CSS

Accessibility should be verified with keyboard-only navigation and a screen reader before production use.

## Styling and Responsiveness

Component styles are maintained in `src/styles/components.css`, with general application styles in `src/styles/main.css`.

The styling is shared across components to support consistency. Responsive CSS rules help the interface adapt to smaller screens.

## Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run start
```

Run lint checks:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Testing

The project was checked using the ESLint command and a production build. The component showcase was also viewed in Microsoft Edge and checked at a mobile-sized viewport.

Further testing should include keyboard navigation, modal focus behaviour, form validation, and additional browsers where available.

## Conclusion

This project demonstrates reusable React UI components, shared CSS styling, component exports, responsive presentation, and basic code-quality checks. The components can serve as a starting point for building consistent interfaces across React applications.
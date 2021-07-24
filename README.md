# About This Project

This project was bootstrapped with **Create React App**

## File Structure

- node_modules/
- public/
  - index.html
- src/
  - interfaces/
  - pages/
  - styles/
  - App.tsx
  - index.tsx
- package.json
- .gitignore

## State Management

This app utilized **state hooks** for statement management.

## Components

### App.js

The stateless parent component, with two children components. It is used for creating react routes for the two children components.

### home

This component utilizes state hooks, which are updated through AJAX calls. It renders JSX of all heroes with Link components.

### about

This component utilizes state hooks, which are updated only when the component mounts. It utilizes params to retrieve the id and uses it to make an AJAX call using the id to retrieve a specific hero.

## Breakpoints

There are three major breakpoints:

### 768px

Tablet view

### 380px/400px

Mobile view

### Tools Used

- **Sass** was used to style the entirety of the application
- **TypeScript**

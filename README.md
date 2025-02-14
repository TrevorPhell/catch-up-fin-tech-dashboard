# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Project Setup
Create React App: The project was initialized using vite, a tool that sets up a React project with all the necessary configurations.

Tailwind CSS: Tailwind was added for styling, making it easy to create modern, responsive designs using utility classes.

Folder Structure: The app is organized into smart components (containers) and dumb components (UI elements) for better maintainability.

# Create components
### UI Components: 
Reusable components like `Card`, `Table`, `Button`, and `Input` were created to ensure consistency and reduce code duplication.

- Card: A flexible container for displaying content.

- Table: A dynamic table that accepts headers and rows as props.

- Button: A customizable button with support for different variants (e.g., primary, secondary).

- Input: A reusable input field with built-in support for labels and error messages.

### Feature Components: 
Components like `BalanceOverview`, `RecentTransactions`, and `ExpenseChart` are built using these reusable UI components.

## Add Logic:

- Use state to manage data (e.g., balance, transactions).

- Use props to pass data between components.

- Use events to handle user interactions (e.g., form submission, theme toggle).

## Style the App:

Use Tailwind CSS classes to style your components.

Make the app responsive using Tailwind’s grid and flex utilities.
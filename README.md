# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Project Overview

This project is a React-based rental listing application built with Vite for fast development. It showcases component-driven architecture with reusable UI components such as Header, Footer, PropertyList, and various property detail components. The application fetches property data from a local data module and renders dynamic property cards.

## Folder Structure

- `src/components/`: Contains all reusable React components organized by feature.
- `src/data/properties.js`: Mock data module exporting property listings.
- `src/assets/`: Static assets including images.
- `public/`: Public static files like favicon and index.html.

## Getting Started

1. Install dependencies with `npm install`.
2. Run the development server with `npm run dev`.
3. Build for production with `npm run build`.

## Contributing

Feel free to open issues or submit pull requests. Ensure you follow the ESLint rules and maintain code coverage.

## License

This project is licensed under the MIT License.

# AlloraMart

An e-commerce platform built with React, Vite, and Tailwind CSS.

## Project Structure

```
src/
├── assets/           # Static assets (images, fonts, etc.)
├── components/
│   ├── layout/       # Layout components (Navbar, Footer, etc.)
│   └── ui/           # Reusable UI components (Loading, Logo, etc.)
├── constants/        # App-wide constants and configuration
├── features/         # Feature-based modules
│   └── home/         # Home feature
│       ├── components/  # Feature-specific components
│       └── Home.jsx     # Main feature page
├── hooks/            # Custom React hooks
├── pages/            # Route pages (minimal logic)
├── services/         # API services and data fetching
├── utils/            # Helper functions and utilities
├── App.jsx           # Main application component
└── main.jsx          # Application entry point
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Features

- ✅ React Router for navigation
- ✅ Lazy loading for optimized performance
- ✅ Error Boundary for graceful error handling
- ✅ Loading states
- ✅ 404 page
- ✅ Layout component pattern
- ✅ Industry-standard folder structure

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Folder Structure Guidelines

### `components/`
- **layout/**: Components that define the app's layout (Navbar, Footer, Layout)
- **ui/**: Pure, reusable UI components (Loading, Logo, ErrorBoundary)

### `features/`
Feature-based organization for complex features. Each feature contains:
- `components/`: Feature-specific components
- `hooks/`: Feature-specific hooks
- Main page component

### `pages/`
Minimal page components that primarily handle routing and data fetching.

### `services/`
API calls and data fetching logic.

### `utils/`
Pure utility functions (formatters, validators, etc.).

### `hooks/`
Custom React hooks shared across the app.

### `constants/`
App-wide constants and configuration.

## License

MIT

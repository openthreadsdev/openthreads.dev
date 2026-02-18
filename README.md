# OpenThreads.dev

[![Netlify Status](https://api.netlify.com/api/v1/badges/58786a3a-22f0-4464-af50-0286ea2c3bed/deploy-status)](https://app.netlify.com/projects/openthreads/deploys)

Repository for OpenThreads website.

A modern web application built with React, TypeScript, and Vite, featuring a comprehensive UI component library powered by shadcn/ui.

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Routing:** React Router
- **State Management:** Redux
- **Testing:** Vitest + React Testing Library
- **Code Quality:** ESLint

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

## Getting Started

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Building

Build the production bundle:

```bash
npm run build
```

Build for development (with development mode enabled):

```bash
npm run build:dev
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests once
- `npm run test:watch` - Run tests in watch mode

## Testing

This project uses Vitest for testing. Tests are located in the `src/test` directory.

Run tests:

```bash
npm run test
```

Run tests in watch mode during development:

```bash
npm run test:watch
```

## Project Structure

```
src/
├── articles/        # Article content
├── components/      # Reusable UI components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions and libraries
├── pages/          # Page components
├── redux/          # Redux state management
├── test/           # Test files
├── App.tsx         # Main application component
└── main.tsx        # Application entry point
```

## Code Style

This project follows Conventional Commits format for commit messages:

- `feat:` - New features
- `fix:` - Bug fixes
- `refactor:` - Code refactoring
- `chore:` - Maintenance tasks
- `docs:` - Documentation updates
- `test:` - Test updates
- `style:` - Code style changes
- `perf:` - Performance improvements

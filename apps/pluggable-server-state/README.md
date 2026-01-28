# Vue 3 E-commerce POC

A proof-of-concept Vue 3 application demonstrating modern frontend development practices with TypeScript, state management, and API integration. This project features a product catalog with cart functionality, showcasing best practices for building scalable Vue applications.

## 🚀 Features

- **[Vue 3](https://vuejs.org/)** with Composition API and **[TypeScript](https://www.typescriptlang.org/)**
- **[PrimeVue](https://primevue.org/)** UI component library with modern theming
- **[TanStack Vue Query](https://tanstack.com/query/latest/docs/vue/overview)** for server state management and caching
- **[Orval](https://orval.dev/)** for automatic API client generation from OpenAPI specs
- **[Vite](https://vitejs.dev/)** for fast development and optimized builds
- **TypeScript** for type safety and better developer experience

## 🏗️ Project Structure

```
src/
├── api/              # API configuration and generated clients
│   ├── openapi.json  # OpenAPI specification
│   ├── generated/    # Auto-generated API clients and models
│   └── mutator/      # Custom fetch configuration
├── components/       # Reusable Vue components
├── features/         # Feature-based organization
│   └── products/     # Product-related components
└── pages/           # Application pages
```

## 📦 Prerequisites

- Node.js 20.19.0+ or 22.12.0+
- pnpm package manager

## � Getting Started

1. **Install Dependencies**

   ```sh
   pnpm install
   ```

2. **Generate API Client**

   ```sh
   pnpm generate:api
   ```

   This step generates TypeScript API clients and models from the OpenAPI specification. It's required before running the development server.

3. **Start Development Server**
   ```sh
   pnpm dev
   ```

## 📜 Available Scripts

### `pnpm dev`

Starts the development server with hot-reload functionality. The application will be available at `http://localhost:5173` by default.

### `pnpm build`

Creates a production build by running type checking and building the application. This is a combined script that:

1. Runs `type-check` to verify TypeScript types
2. Executes `build-only` to create the optimized bundle

### `pnpm build-only`

Builds the application for production without running type checks. Useful when you want to skip type checking for faster builds.

### `pnpm type-check`

Runs TypeScript type checking using `vue-tsc`. This validates all TypeScript code and Vue component types without building.

### `pnpm preview`

Serves the production build locally for testing. Run this after `pnpm build` to preview the optimized application.

### `pnpm generate:api`

Generates TypeScript API client and models from the OpenAPI specification using Orval. This creates:

- API client functions with Vue Query integration
- TypeScript models for all API responses
- Custom fetch mutator for request/response handling

## 🔧 Configuration

### Environment Variables

The project includes a `.env` file with the API base URL configuration:

```
VITE_API_BASE_URL=https://fakestoreapi.com/
```

You can create a `.env.local` file to override these values for local development.

### Orval Configuration

The project uses Orval to generate API clients from OpenAPI specs. Configuration is in [orval.config.ts](orval.config.ts).

### Vite Configuration

Build and development server configuration can be found in [vite.config.ts](vite.config.ts).

## 📚 Documentation

### Core Technologies
- [Vue 3](https://vuejs.org/) - Progressive JavaScript framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with type safety
- [Vite](https://vitejs.dev/) - Next generation frontend tooling

### UI & Styling
- [PrimeVue](https://primevue.org/) - Vue UI component library
- [PrimeUI Themes](https://primevue.org/theming/) - Modern theming system

### State Management & API
- [TanStack Vue Query](https://tanstack.com/query/latest/docs/vue/overview) - Data fetching and caching
- [Orval](https://orval.dev/) - OpenAPI client generator
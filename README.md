# Artisan Website

This project is a monorepo web application for artisans, built with Next.js (web) and NestJS (api), managed with [pnpm](https://pnpm.io/) and [Turborepo](https://turbo.build/).

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/) (v8 or higher recommended)

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/artisan-website.git
    cd artisan-website
    ```

2. **Install dependencies:**
    ```sh
    pnpm install
    ```

## Running the Project

To start both the web and api development servers in parallel:

```sh
    pnpm dev
    or
    pnpm turbo run dev --parallel
    or
    pnpm turbo run dev --parallel --filter=web --filter=api
```

- The **web** app (Next.js) will be available at [http://localhost:3000](http://localhost:3000) by default.
- The **api** app (NestJS) will be available at [http://localhost:3001](http://localhost:3001) by default (or as configured).

## Useful Commands

- **Start all apps in development:**  
  ```sh
  pnpm dev
  ```

- **Build all apps:**  
  ```sh
  pnpm build
  ```

- **Lint all apps:**  
  ```sh
  pnpm lint
  ```

- **Run a single app:**  
  ```sh
  pnpm --filter web dev
  pnpm --filter api dev
  ```

## Notes

- Make sure you have a local `.env` file if your apps require environment variables.
- For best results, use the version of pnpm specified in `packageManager` in the root `package.json`.

---
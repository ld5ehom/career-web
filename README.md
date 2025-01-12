# Career Fair Website (Frontend)

## Project Overview

-   Developed a single repository using Micro Frontend Architecture (MFA) to integrate multiple projects, including user account management, networking, education, job postings, and shared components like a UI-Kit and shell-router.
-   The Shell acts as the primary host application, with each micro app functioning as a remote module. It manages authentication and leverages React Router to navigate between micro apps based on browser URLs. Webpack Module Federation connects the Shell and micro apps, enabling independent React render lifecycles for each app. This design ensures micro apps operate autonomously while remaining part of a unified system.
-   Shared logic and components, such as the UI-Kit and Shell-Router, were extracted into standalone packages and integrated into both the Shell and micro apps during the build process. Modules are managed based on package.json configurations, with Build-Time Shared settings preventing duplication. Webpack Module Federation and peerDependencies optimize React library loading, enabling seamless integration of shared functionality while supporting independent micro app development.
-   Designed two core modules, ui-kit and shell-router. The career-web/ui-kit delivers components for global styling and ensures visual consistency across the application. The career-web/shell-router streamlines interaction between the Shell and micro apps by managing routing and authentication information through hooks, components, and factory functions.
-   Utilized : TypeScript, React, pnpm workspace, Turborepo, Webpack, Vite,

---

## Reference Site

-   [Design System](https://primer.style/components)
-   [tailwindcss](https://tailwindcss.com/docs)
-   [storybook](https://storybook.js.org/)
-   [Google material Symbol](https://fonts.google.com/iconss)
-   [Day.js](https://day.js.org/docs/en/installation/installation)
-   [Scroll-lock](https://www.npmjs.com/package/scroll-lock)
-   [Intersection Observer Docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
-   [React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer)
-   [React Responsive Carousel](https://react-responsive-carousel.js.org/)
-   [Lodash](https://lodash.com/docs/#throttle)
-   [React Virtuoso](https://virtuoso.dev/)
-   [Auth0](https://auth0.com)
-   [npm Json Server](https://github.com/typicode/json-server/tree/v0)

---

## Architecture

```
Career Platform Architecture
├── App Shell (Host)
│   ├── Core Responsibilities:
│   │   ├── Authentication Management
│   │   ├── Global Navigation (React Router)
│   │   ├── Integration of Micro Apps via Webpack Module Federation
│   │   └── Communication with Shared Modules
│   └── Micro Apps:
│       ├── Postings (Job/Content Posting)
│       ├── Network (User Connections and Recommendations)
│       ├── Video (Courses and Learning Materials)
│       └── Job (Job Listings and Applications)
└── Shared Packages
    ├── career-web/ui-kit
    │   ├── Reusable UI Components
    │   ├── Global Styling
    │   └── Visual Consistency
    ├── career-web/shell-router
    │   ├── Routing Logic Between Apps
    │   ├── Authentication Hooks and Components
    │   └── Shared State Management
    └── Other Utilities (etc...)
```

---

## Milestones

-   M1 : App Basic Functionality Development
-   M2 : Advanced Features and Testing
-   M3 : Bug Fixes and Updates

---

## Start

```
pnpm i
```

```
pnpm build
```

```
pnpm dev
```

---

## Task List

### Milestone 1 : App Basic Functionality Development

**Task 1. App Shell - Base Layout**

-   **Issues** : [task-1-layout](https://github.com/ld5ehom/career-web/tree/task-1-layout)
-   **Details** :
    -   **Setup and Configure App Shell and React Icons** [f301e05](https://github.com/ld5ehom/career-web/commit/f301e0522042430fdd637021ef85b6a9c70e0805)
        -   Setup for React Icons to Implement Components
        -   Create and Configure App Shell Package
    -   **Implement authentication handling and navigation with react-router-dom** [83eb95a](https://github.com/ld5ehom/career-web/commit/83eb95abd9113cd7790af6d3d5645f13004cc8fa)
        -   Set up routing between micro apps based on browser URLs: Established routing system to ensure seamless navigation across micro frontends, allowing users to switch between different micro apps without page reloads.
        -   Dynamically managed micro app routes within the Shell application: Routes for each micro app are dynamically added and managed within the Shell, ensuring that each micro app is accessible via its respective URL. This allows for a flexible routing structure that can adapt to changes in the system.
        -   Integrated authentication handling into the routing system: Authentication guards were added to protect specific routes. If a user is not authenticated, they are redirected to a login page, ensuring unauthorized users cannot access sensitive content.
        -   Utilized React Router for smooth micro app integration: React Router was used to manage navigation, allowing each micro app to independently render its React components while ensuring smooth integration into the Shell application. This also supports deep linking and route-specific logic for each micro app.
        -   Set up a consistent layout and styling across all micro apps: A common layout and shared styling were established to ensure that the UI remains consistent across all micro apps, providing a unified user experience. This includes a global header, footer, and other components that are reused across the different micro frontends.

**Task 2. Home Post**

-   **Issues** : [task-2-post](https://github.com/ld5ehom/career-web/tree/task-2-post)
-   **Details** :
    -   **TEST API Setup** [2209c2b](https://github.com/ld5ehom/career-web/commit/2209c2be6294e6893e1a56263de46cf2b05df0c1)
        ```
        pnpm --filter @career-web/server start:live
        ```
        ```
        http://localhost:4000/posts
        ```
    -   **Posting Setup**
        -   Install the Auth0 package in the posting
        ```
        pnpm --filter @career-web/posting add @auth0/auth0-spa-js
        ```
        ```
        pnpm --filter @career-web/posting add @types/node -D
        ```
        -   Set the TypeScript version to 5.7.3
        -   The career-web.code-workspace was created for managing frontend applications, shared packages, and the backend server within a monorepo structure.
        -   In order to share the created functionality across the entire application, a context and provider/auth0-client-provider.tsx were created.
        ```
        pnpm --filter @career-web/posting add dotenv-webpack -D
        ```
        ```
        pnpm --filter @career-web/posting add @babel/runtime
        ```
        ```
        pnpm --filter @career-web/posting add eslint eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
        ```

**Task 3. Video**

**Task 4. Network**

**Task 5. Jobs**

---

### Milestone 2: Advanced Features and Testing

**Task 6. Fragment Creation**

**Task 7. Federation**

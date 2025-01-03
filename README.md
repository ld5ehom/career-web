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
-   [Faker.js](https://fakerjs.dev/guide/)
-   [Intersection Observer Docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
-   [React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer)
-   [React Responsive Carousel](https://react-responsive-carousel.js.org/)
-   [Lodash](https://lodash.com/docs/#throttle)
-   [Toast UI](https://nhn.github.io/tui.editor/latest/)
-   [React Virtuoso](https://virtuoso.dev/)
-   [Supabase Auth](https://supabase.com/docs/guides/auth/managing-user-data)

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
│       ├── Education (Courses and Learning Materials)
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
pnpm build --filter @career-web/ui-kit
```

```
pnpm --filter @career-web/shell start:live
```

---

## Task List

### Milestone 1 : App Basic Functionality Development

**Task 1. App Shell - Base Layout**

-   **Issues** : [task-1-layout](https://github.com/ld5ehom/career-web/tree/task-1-layout)
-   **Details** :
    -   **Setup and Configure App Shell and React Icons**
        -   Setup for React Icons to Implement Components
        -   Create and Configure App Shell Package

**Task 2. Posting**

**Task 3. Education**

**Task 4. Network**

**Task 5. Jobs**

---

### Milestone 2: Advanced Features and Testing

**Task 6. Fragment Creation**

**Task 7. Federation**

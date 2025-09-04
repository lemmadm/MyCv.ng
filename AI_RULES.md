# AI Development Rules for MyCV.i.ng

This document outlines the technical stack and development guidelines for building and maintaining the MyCV.i.ng application.

## Tech Stack Overview

The MyCV.i.ng application is built with a focus on performance, maintainability, and a modern user experience.

*   **Frontend Framework:** React.js for building dynamic and interactive user interfaces.
*   **Language:** TypeScript for type safety and improved code quality.
*   **Routing:** React Router for managing client-side navigation.
*   **UI Components:** shadcn/ui for pre-built, accessible, and customizable UI components.
*   **Styling:** Tailwind CSS for a utility-first approach to styling.
*   **Icons:** lucide-react for a comprehensive set of SVG icons.
*   **Notifications:** react-hot-toast for elegant and responsive user feedback.
*   **Backend (PHP):** A PHP-based backend handles server-side logic, API endpoints, and business operations (as inferred from `play-ground.html`).
*   **Database (MySQL):** MySQL is used for persistent data storage, managing orders, user information, and domain registrations (as inferred from `play-ground.html`).
*   **Security:** Custom HMAC SHA256 and CSRF token implementation for API security.

## Library Usage Rules

To maintain consistency and best practices, adhere to the following guidelines for library usage:

*   **Frontend Framework:**
    *   **React.js with TypeScript:** All new frontend development and refactoring of existing HTML pages MUST be done using React and TypeScript.
*   **UI Components:**
    *   **shadcn/ui:** ALWAYS prioritize `shadcn/ui` components. These are already available for use.
    *   **Custom Components:** If a required UI element is not available in `shadcn/ui`, create a new, small, and focused React component in `src/components/` using Tailwind CSS for styling.
*   **Styling:**
    *   **Tailwind CSS:** Use Tailwind CSS classes exclusively for styling within React components. Avoid inline styles where Tailwind classes can be used.
    *   **Custom CSS:** Only create new `.css` files for global styles, complex animations, or third-party library overrides that cannot be handled by Tailwind.
*   **Icons:**
    *   **lucide-react:** Use icons from the `lucide-react` library for all visual representations. This package is already installed.
*   **Routing:**
    *   **React Router:** Implement all client-side navigation using `react-router-dom`. Routes should be defined in `src/App.tsx`.
*   **State Management:**
    *   **React Hooks:** For component-local state, use `useState` and `useReducer`.
    *   **Context API:** For application-wide state that needs to be shared across many components, use React's Context API. Avoid over-engineering with external state management libraries unless absolutely necessary for complex global state.
*   **API Communication:**
    *   **Fetch API / SecureAPIClient:** Adapt the existing `SecureAPIClient` logic (from `js/secure.js` and `js/script.js`) for use within React components. Use the native `fetch` API for HTTP requests.
*   **Notifications:**
    *   **react-hot-toast:** Use `react-hot-toast` for all user feedback and notifications (e.g., success messages, error alerts, loading indicators).
*   **File Structure:**
    *   **`src/pages/`:** For top-level views or routes.
    *   **`src/components/`:** For reusable UI components.
    *   **`src/utils/`:** For utility functions (e.g., `toast.ts` for `react-hot-toast` wrappers).
    *   **`src/hooks/`:** For custom React hooks.
    *   Directory names MUST be all lower-case. File names may use mixed-case (e.g., `UserProfile.tsx`).
*   **Backend Interaction:**
    *   **Supabase:** If the user requests features requiring authentication, database, or server-side functions (e.g., loading API keys, secrets), suggest adding Supabase as an integration.
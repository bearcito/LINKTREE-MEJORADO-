# AI Rules for Alta Telefonía - Links App

This document outlines the technical stack and guidelines for developing and modifying the Alta Telefonía - Links application.

## Tech Stack Overview

*   **Next.js:** The application is built using Next.js for server-side rendering, routing, and API routes.
*   **React:** The core library for building the user interface.
*   **TypeScript:** All components and logic are written in TypeScript for type safety and improved developer experience.
*   **Tailwind CSS:** Styling is handled exclusively with Tailwind CSS. All new components and modifications should use Tailwind utility classes.
*   **Geist Fonts:** The `Geist` and `Geist_Mono` fonts are used for typography, providing a modern and clean aesthetic.
*   **`react-icons`:** Used for incorporating various icons throughout the application.
*   **`next-themes`:** The `next-themes` library is available for managing light/dark mode themes, though not fully integrated into the main layout yet.
*   **`embla-carousel-react`:** Utilized for creating performant and touch-friendly carousels, specifically for background image transitions.
*   **shadcn/ui (Radix UI based):** A collection of accessible and customizable UI components. This should be the primary library for building new UI elements.
*   **`clsx` and `tailwind-merge`:** Utility libraries for conditionally joining class names and merging Tailwind classes efficiently.

## Library Usage Guidelines

*   **UI Components:** Always prioritize `shadcn/ui` components for any new UI elements. If a specific component is not available in `shadcn/ui`, create a new, small, and focused component using Tailwind CSS.
*   **Styling:** Use Tailwind CSS for all styling. Avoid inline styles or custom CSS files unless absolutely necessary for very specific, non-Tailwind-compatible styles (which should be rare).
*   **Icons:** Use icons from the `react-icons` library.
*   **Animations:** For simple animations, leverage `tw-animate-css` or define custom keyframes in `app/globals.css` and apply them via Tailwind classes. For more complex, interactive animations, `framer-motion` is available.
*   **Background Carousel:** The `embla-carousel-react` library is used for the background image carousel.
*   **Class Utilities:** When combining multiple Tailwind classes, especially conditionally, use `clsx` and `tailwind-merge` via the `cn` utility function in `lib/utils.ts`.
*   **Favicon:** The `public/Avatar.png` file is designated as the application's favicon and should be used for all related metadata.
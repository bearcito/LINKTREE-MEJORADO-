# AI Rules for Alta Telefonía - Links App

This document outlines the technical stack and guidelines for developing the Alta Telefonía - Links application.

## Tech Stack Overview

*   **Framework:** Next.js (App Router) for server-rendered React applications.
*   **Language:** TypeScript for type safety and improved developer experience.
*   **UI Library:** React for building interactive user interfaces.
*   **Styling:** Tailwind CSS for utility-first styling, ensuring responsive and consistent designs.
*   **Component Library:** shadcn/ui for pre-built, accessible, and customizable UI components.
*   **Fonts:** Geist Sans and Geist Mono for modern and clean typography.
*   **Icons:** `react-icons` for a wide range of vector icons.
*   **Animations:** `tw-animate-css` for simple CSS animations and `framer-motion` for more complex, interactive animations.
*   **Form Handling:** `react-hook-form` with `zod` for robust form validation.
*   **Date Pickers:** `react-day-picker` for date selection.
*   **Toasts:** `sonner` for elegant and accessible toast notifications.
*   **Utilities:** `clsx` and `tailwind-merge` for managing CSS classes efficiently.
*   **Image Optimization:** `next/image` for optimized image delivery.
*   **Theme Management:** `next-themes` for handling light/dark mode.

## Library Usage Guidelines

*   **UI Components:**
    *   **Prioritize shadcn/ui:** Always check if a suitable component exists within shadcn/ui before creating a new one.
    *   **Custom Components:** If a shadcn/ui component doesn't fit the exact requirements or significant customization is needed, create a new, small, and focused component in `components/` using Tailwind CSS.
    *   **Never modify shadcn/ui source files.**
*   **Styling:**
    *   **Tailwind CSS Only:** All styling must be done using Tailwind CSS utility classes. Avoid custom CSS files or inline styles unless absolutely necessary for dynamic values.
    *   **Responsive Design:** Ensure all components are responsive by utilizing Tailwind's responsive prefixes (e.g., `sm:`, `md:`, `lg:`).
*   **Icons:**
    *   Use `react-icons` for all icon needs. Import specific icons as required (e.g., `FaInstagram` from `react-icons/fa`).
*   **Animations:**
    *   For simple, declarative animations (like fade-ins, slide-ups), use `tw-animate-css` classes or define custom keyframes in `app/globals.css` and apply them via Tailwind.
    *   For more complex, interactive, or state-driven animations, use `framer-motion`.
*   **Forms:**
    *   Implement all forms using `react-hook-form` for state management and `zod` for schema validation.
*   **Notifications:**
    *   Use `sonner` for all toast notifications to provide user feedback.
*   **File Structure:**
    *   New pages should go into `app/`.
    *   New reusable components should go into `components/`.
    *   Utility functions should go into `lib/utils.ts` or a new file in `lib/` if it's a distinct module.
    *   Data files should go into `data/`.
*   **Favicon:**
    *   The favicon for the application is set to `/Avatar.png`. This should remain consistent.
# Copilot Instructions for HCMUT Study (React + Vite)

## Project Overview
- **Purpose:** Web app for HCMUT Tutor program, supporting student/tutor login, dashboards, and program info.
- **Stack:** React 19, Vite, React Router v7, lucide-react icons, CSS modules per feature.
- **Structure:**
  - `src/components/` — Feature-based folders: Homepage, Auth, Login
  - `src/assets/` — Images (logo, hero)
  - `src/style/` — Shared CSS for major sections
  - `src/main.jsx` — App entry, React root
  - `src/App.jsx` — Routing and main layout

## Key Workflows
- **Start Dev Server:** `npm run dev` (Vite, HMR enabled)
- **Build for Production:** `npm run build`
- **Preview Build:** `npm run preview`
- **Lint:** `npm run lint` (uses ESLint, see `eslint.config.js`)

## Routing & Navigation
- Uses `react-router-dom` v7. All routes defined in `src/App.jsx`.
- Main routes:
  - `/` — Homepage (`Homepage.jsx`)
  - `/login` — Login options (`Login.jsx`)
  - `/auth/:role` — Auth form for student/tutor (`AuthForm.jsx`)
  - `/student`, `/tutor` — Dashboards (placeholder)
- Use `<Link>` for navigation, not `<a>`, except for external links.

## Styling Conventions
- Each feature/component has its own CSS file (imported locally in JSX).
- Shared styles in `src/style/`.
- Use BEM-like class names for clarity (e.g., `.auth-card`, `.login-btn`).

## Component Patterns
- Functional components only, with React hooks for state/navigation.
- Asset imports use relative paths (e.g., `import logo from '../../assets/logo.png'`).
- Icons from `lucide-react` as React components.
- No context or Redux; state is local to components.

## Integration & Extensibility
- No backend/API integration yet; login is stubbed (see `AuthForm.jsx`).
- To add new roles/pages, update `App.jsx` routes and create new components under `src/components/`.
- For new styles, prefer feature-local CSS, import in the component.

## Linting & Code Quality
- ESLint config in `eslint.config.js` (uses recommended, react-hooks, and vite rules).
- Unused vars starting with uppercase or underscore are ignored (see `no-unused-vars` rule).

## Example: Adding a New Page
1. Create `src/components/NewPage/NewPage.jsx` and `NewPage.css`.
2. Import and add a `<Route path="/new" element={<NewPage />} />` in `App.jsx`.
3. Use `<Link to="/new">` for navigation.

## References
- See `README.md` for Vite/React basics.
- See `src/components/` for feature/component structure.
- See `package.json` for dependencies and scripts.

---
For questions, follow the patterns in existing components and routes. Keep code modular and styles scoped per feature.

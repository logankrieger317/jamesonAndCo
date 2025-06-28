# Claude Instructions for Jameson Project

## Project Overview
This is a React/Vite web application for Jameson's business. It's a modern web app built with:
- React 18 with Vite as the build tool
- TypeScript for some components (.tsx files)
- Tailwind CSS for styling
- Material-UI components
- React Router for navigation
- Express.js server for production
- Image optimization pipeline

## Key Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run optimize-images` - Optimize images for web

## Project Structure
- `src/components/` - All React components organized by feature
  - `blog/` - Blog-related components
  - `layout/` - Header, Footer components
  - `modals/` - Modal components
  - `pages/` - Main page components
  - `ui/` - Reusable UI components
- `src/services/` - Service utilities (analytics, etc.)
- `public/` - Static assets
- `server.js` - Express server for production

## Code Standards
- Use TypeScript for new components when possible (.tsx extension)
- Follow existing component patterns and folder structure
- Use Tailwind CSS for styling
- Components use proper React patterns (hooks, functional components)
- Image optimization is automated via scripts

## Important Notes
- Always run `npm run lint` after making changes
- Images should be optimized using the provided scripts
- Follow existing naming conventions for components and files
- The app uses both .jsx and .tsx files - maintain consistency with surrounding files

## Testing & Deployment
- Lint code before committing: `npm run lint`
- Build and test locally: `npm run build && npm run start`
- The app is configured for production deployment with Express.js
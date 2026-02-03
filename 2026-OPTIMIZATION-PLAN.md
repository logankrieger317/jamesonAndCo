# Jameson & Company - 2026 Updates and Optimization Plan

> **Branch**: `2026UpdatesAndOptimization`
> **Created**: February 2026
> **Status**: In Progress

---

## Table of Contents
1. [Executive Summary](#executive-summary)
2. [Critical Security Issues](#1-critical-security-issues)
3. [Outdated Dependencies](#2-outdated-dependencies)
4. [Code Quality Issues](#3-code-quality-issues)
5. [Performance Optimization](#4-performance-optimization)
6. [User Experience Improvements](#5-user-experience-improvements)
7. [Architecture & Structure](#6-architecture--structure)
8. [Pricing System Overhaul](#7-pricing-system-overhaul)
9. [Implementation Timeline](#implementation-timeline)

---

## Executive Summary

This document outlines a comprehensive optimization plan for the Jameson & Company website. The codebase was built a few years ago and requires updates across security, performance, code quality, and user experience.

### Quick Stats
| Category | Issues Found | Severity |
|----------|-------------|----------|
| Security Vulnerabilities | 3 | CRITICAL |
| Outdated Packages | 25+ | HIGH |
| Code Duplication | ~1,500 lines | HIGH |
| Performance Issues | 12 | MEDIUM |
| UX Problems | 15 | MEDIUM |
| Broken Links/Routes | 6 | MEDIUM |

---

## 1. Critical Security Issues

### 1.1 Path Traversal Vulnerability
- [ ] **CRITICAL** - Fix path traversal in image handler
- **File**: `server.js:38-69`
- **Risk**: Server compromise - attacker can read any file on system
- **Current Code**:
  ```javascript
  const imagePath = join(__dirname, 'src/Images/optimized', req.params.image);
  // No validation! User could request: ../../../../../../etc/passwd
  ```
- **Fix**: Add path validation
  ```javascript
  const path = require('path');
  const safePath = path.normalize(req.params.image).replace(/^(\.\.(\/|\\|$))+/, '');
  const imagePath = path.join(__dirname, 'src/Images/optimized', safePath);
  if (!imagePath.startsWith(path.join(__dirname, 'src/Images/optimized'))) {
    return res.status(403).send('Forbidden');
  }
  ```

### 1.2 Missing `rel="noopener noreferrer"` on External Links
- [ ] Add security attributes to external links
- **Affected Files**:
  - `src/components/modals/BackToSchoolModal.jsx:67`
  - `src/components/modals/BookingSpecialModal.tsx:67`
  - `src/components/modals/DogtoberFestModal.jsx`
  - `src/components/features/DevTeam.jsx`
  - `src/components/ui/Map.jsx`
  - `src/components/ui/QRPoster.jsx`
- **Risk**: XSS vulnerability - opened page can access `window.opener`

### 1.3 No Content Security Policy
- [ ] Add CSP headers to Express server
- **File**: `server.js`
- **Fix**: Add helmet middleware or manual CSP headers

---

## 2. Outdated Dependencies

### Current vs Latest Versions

| Package | Current | Latest | Priority |
|---------|---------|--------|----------|
| react | 18.2.0 | 19.x | HIGH |
| react-dom | 18.2.0 | 19.x | HIGH |
| react-router-dom | 6.20.0 | 7.x | HIGH |
| @mui/material | 5.15.10 | 7.x | HIGH |
| @mui/icons-material | 5.15.10 | 7.x | HIGH |
| tailwindcss | 3.3.5 | 4.x | MEDIUM |
| framer-motion | 10.6.8 | 12.x | MEDIUM |
| express | 4.18.2 | 5.x | MEDIUM |
| vite | 5.0.0 | 6.x | MEDIUM |
| eslint | 8.53.0 | 9.x | LOW |
| swiper | 11.0.5 | 12.x | LOW |

### Action Items
- [ ] Create a separate branch for dependency updates
- [ ] Update React 18 → 19 (check breaking changes)
- [ ] Update React Router 6 → 7 (significant API changes)
- [ ] Update MUI 5 → 7 (theming changes)
- [ ] Update Tailwind 3 → 4 (new config format)
- [ ] Update Framer Motion
- [ ] Update Express 4 → 5
- [ ] Run `npm audit` and fix vulnerabilities
- [ ] Test thoroughly after each major update

---

## 3. Code Quality Issues

### 3.1 Massive Modal Code Duplication (~1,500 lines)
- [ ] Create reusable `BaseModal` component
- **Problem**: 15 modal files with nearly identical code
- **Affected Files**:
  - `src/components/modals/AnniversaryModal.jsx` (136 lines)
  - `src/components/modals/ThanksgivingModal.jsx` (91 lines)
  - `src/components/modals/FleaModal.jsx` (155 lines)
  - `src/components/modals/DiscountModal.jsx` (109 lines)
  - `src/components/modals/BackToSchoolModal.jsx` (91 lines)
  - `src/components/modals/BookingSpecialModal.tsx` (90 lines)
  - Plus 9 more...

- **Duplicated Patterns**:
  1. Identical `customStyles` object (Lines 4-32 across files)
  2. Identical localStorage logic
  3. Identical close button styling
  4. Same modal overlay patterns

- **Solution**: Create `src/components/ui/BaseModal.jsx`:
  ```jsx
  // Props: title, content, storageKey, expirationDays, onClose
  // Handles: localStorage, styling, close behavior, accessibility
  ```

### 3.2 Broken localStorage Pattern
- [ ] Fix localStorage clearing on page reload
- **File**: `src/components/modals/BookingSpecialModal.tsx:15-27`
- **Problem**: Modal state clears on every page refresh, defeating localStorage purpose
- **Current Bad Code**:
  ```javascript
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("januaryModalClosed"); // WRONG!
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
  }, []);
  ```
- **Fix**: Remove the beforeunload listener, use expiration dates instead

### 3.3 Unused Variables and Properties
- [ ] Fix undefined properties in Services page
- **File**: `src/components/pages/Services.jsx:80-81`
- **Problem**: `product.color` and `product.price` accessed but never defined
- **Fix**: Either add properties to products array or remove the JSX

### 3.4 Duplicate Variable Declaration
- [ ] Remove duplicate `bookingUrl` in Home.jsx
- **File**: `src/components/pages/Home.jsx:12 & 68`
- **Fix**: Remove the duplicate declaration on line 68

### 3.5 Mixed JSX/TSX Inconsistency
- [ ] Standardize file extensions
- **Current State**: 46 `.jsx` files, 12 `.tsx` files with no clear pattern
- **Decision Needed**: Choose one approach:
  - Option A: Convert all to TypeScript (`.tsx`)
  - Option B: Keep JavaScript (`.jsx`) and remove TypeScript files
- **Recommendation**: Gradual TypeScript migration for new files

### 3.6 Unnecessary React Imports
- [ ] Remove unused React imports (jsx-runtime handles this)
- **Affected Files**: Most modal files still have `import React from 'react'`

---

## 4. Performance Optimization

### 4.1 Large Unoptimized Images
- [ ] Optimize root-level images
- **Files and Current Sizes**:
  - `Logo.png` - 1.3 MB (target: <100 KB)
  - `poodle.jpeg` - 2.0 MB (target: <500 KB)
  - `map.png` - 879 KB (target: <200 KB)
- **Total**: 4.2 MB of unoptimized images!
- **Fix**: Run through Sharp optimization, convert to WebP

### 4.2 External Images Not Cached
- [ ] Download and optimize external images
- **File**: `src/components/pages/Services.jsx:10-45`
- **Problem**: 5 images loaded from external CDNs (hearstapps, southernliving, etc.)
- **Issues**:
  - No control over delivery/availability
  - No responsive variants
  - Slow page loads
- **Fix**: Download, optimize, and serve locally

### 4.3 No Route-Based Code Splitting
- [ ] Implement lazy loading for routes
- **File**: `src/App.jsx`
- **Current**: All 58 components bundled together
- **Fix**:
  ```jsx
  const Home = lazy(() => import('./components/pages/Home'));
  const About = lazy(() => import('./components/pages/About'));
  // Wrap routes in Suspense with loading fallback
  ```

### 4.4 ChatAssistant Always Loaded
- [ ] Lazy load ChatAssistant component
- **File**: `src/components/ui/ChatAssistant.jsx` (550 lines)
- **Problem**: Loaded on every page even if user never opens it
- **Fix**: Dynamic import when chat button clicked

### 4.5 Inefficient Image Preloading
- [ ] Fix Carousel preload logic
- **File**: `src/components/ui/Carousel.jsx:49-55`
- **Problem**: Preload runs on every `windowWidth` change
- **Fix**: Use `useMemo` or move outside effect

### 4.6 Vite Build Optimization
- [ ] Improve chunk splitting
- **File**: `vite.config.js:15-29`
- **Current**: Only 3 manual chunks defined
- **Add**:
  - Separate vendor chunks (MUI, Framer Motion)
  - Route-based chunks
  - CSS extraction optimization

---

## 5. User Experience Improvements

### 5.1 Missing Loading States
- [ ] Add loading indicators throughout app
- **Areas Needing Loading States**:
  - Form submissions (Contact page)
  - Booking button clicks
  - Image loading (skeleton placeholders)
  - Page transitions
- **File**: `src/components/pages/Contact.jsx:124-129` - No loading on submit

### 5.2 Broken Routes and Links
- [ ] Fix Services page navigation
- **File**: `src/components/pages/Services.jsx:75`
- **Problem**: Links use `href="To14"` but routes are `/to14` (lowercase with slash)
- **Fix**: Update all href values to match route paths

### 5.3 Contact Form Non-Functional
- [ ] Implement form submission
- **File**: `src/components/pages/Contact.jsx`
- **Missing**:
  - `onSubmit` handler
  - Form validation
  - Error messages
  - Success feedback
- **Fix**: Add Zod validation (already installed), submit handler, and feedback

### 5.4 Missing SEO Metadata
- [ ] Add React Helmet to all pages
- **Pages Missing Metadata**:
  - `src/components/pages/Home.jsx`
  - `src/components/pages/Services.jsx`
  - `src/components/pages/Contact.jsx`
  - `src/components/pages/About.jsx`
  - `src/components/pages/Faq.jsx`
- **Has Metadata**: `Locations.jsx`, Blog posts

### 5.5 Poor Mobile Responsiveness
- [ ] Fix ChatAssistant mobile layout
- **File**: `src/components/ui/ChatAssistant.jsx:414`
- **Problem**: Fixed 600px height breaks on small phones
- **Fix**: Use `max-h-[80vh]` or similar responsive units

### 5.6 Accessibility Issues
- [ ] Add proper ARIA labels
- [ ] Add focus management for modals
- [ ] Ensure keyboard navigation works
- **Affected Areas**:
  - Modal close buttons (missing aria-label)
  - Chat assistant (focus trap needed)
  - Form inputs (missing labels in some places)

### 5.7 Empty/Broken Links
- [ ] Remove or fix placeholder links
- **File**: `src/components/pages/Services.jsx:59-60`
- **Problem**: `href="#"` links that go nowhere

---

## 6. Architecture & Structure

### 6.1 Create Centralized Data Files
- [ ] Move pricing data to `src/data/pricing.js`
- [ ] Move service definitions to `src/data/services.js`
- [ ] Create `src/data/constants.js` for booking URLs, contact info

### 6.2 Create Reusable Components
- [ ] `BaseModal` - Replace 15 duplicate modals
- [ ] `LoadingSpinner` - Consistent loading states
- [ ] `SEOHead` - Wrapper for React Helmet
- [ ] `ExternalLink` - Auto-adds rel attributes

### 6.3 Improve Folder Structure
```
src/
├── components/
│   ├── common/        # Shared UI components
│   ├── features/      # Feature-specific components
│   ├── layout/        # Header, Footer
│   └── pages/         # Route pages
├── data/              # Static data (pricing, services)
├── hooks/             # Custom React hooks
├── services/          # API calls, analytics
├── styles/            # Global styles
└── utils/             # Helper functions
```

### 6.4 Add Error Boundaries
- [ ] Create global error boundary
- [ ] Add route-level error boundaries
- **Benefit**: Prevent entire app crash from component errors

---

## 7. Pricing System Overhaul

### Current State
The pricing system is built around **weight + hair length**:
- 7 size categories (xs → xxxl)
- 3 hair types (short, long, double)
- 3 service types (bath, groom, fff)

### Target State
Move to **breed-based pricing** as mentioned by owner.

### Action Items
- [ ] Design new pricing data structure
- [ ] Create breed selector component (searchable dropdown)
- [ ] Update ChatAssistant pricing flow
- [ ] Update or remove size-based pages (`To14.jsx`, `Large.jsx`, etc.)
- [ ] Update Home.jsx pricing tiers
- [ ] Consider Playwright script for MoeGo price sync (future)

### Proposed Structure
```javascript
// src/data/pricing.js
export const breedPricing = {
  'Poodle - Toy': { bath: 45, groom: 85, fff: 35 },
  'Poodle - Miniature': { bath: 55, groom: 95, fff: 40 },
  'Golden Retriever': { bath: 65, groom: 110, fff: 45 },
  // ... etc
};

export const breedCategories = [
  { name: 'Small Breeds', breeds: ['Chihuahua', 'Pomeranian', ...] },
  { name: 'Medium Breeds', breeds: ['Beagle', 'Bulldog', ...] },
  // ...
];
```

---

## Implementation Timeline

### Phase 1: Critical Fixes (Week 1)
- [ ] Fix path traversal security vulnerability
- [ ] Add rel="noopener noreferrer" to external links
- [ ] Fix broken routes in Services page
- [ ] Remove duplicate bookingUrl variable

### Phase 2: Performance (Week 2)
- [ ] Optimize large images (Logo.png, poodle.jpeg, map.png)
- [ ] Download and optimize external images
- [ ] Implement route-based code splitting
- [ ] Lazy load ChatAssistant

### Phase 3: Code Quality (Week 3-4)
- [ ] Create BaseModal component
- [ ] Refactor all 15 modals to use BaseModal
- [ ] Fix localStorage patterns
- [ ] Remove unused code and variables

### Phase 4: UX Improvements (Week 5)
- [ ] Add loading states
- [ ] Implement Contact form
- [ ] Add SEO metadata to all pages
- [ ] Fix mobile responsiveness issues

### Phase 5: Dependencies (Week 6)
- [ ] Update React 18 → 19
- [ ] Update React Router 6 → 7
- [ ] Update MUI 5 → 7
- [ ] Update other packages
- [ ] Full regression testing

### Phase 6: Architecture (Week 7-8)
- [ ] Reorganize folder structure
- [ ] Create centralized data files
- [ ] Add error boundaries
- [ ] Implement pricing system overhaul

---

## Progress Tracking

### Completed
- [x] Initial codebase analysis
- [x] Created optimization plan document
- [x] Created `2026UpdatesAndOptimization` branch

### In Progress
- [ ] Phase 1: Critical Fixes

### Not Started
- [ ] Phase 2-6

---

## Notes

- Always run `npm run lint` after changes
- Test on mobile devices after UI changes
- Create PR for each phase for easier review
- Back up current state before major refactors

---

*Last Updated: February 2026*

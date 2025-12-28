import '@testing-library/jest-dom/vitest';

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: () => {},
  writable: true,
});

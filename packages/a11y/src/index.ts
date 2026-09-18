/** Accessibility helpers shared across sites (mechanism only). */

export const SKIP_LINK_ID = 'main-content'

export const skipLinkHref = `#${SKIP_LINK_ID}`

export const reducedMotionQuery = '(prefers-reduced-motion: reduce)'

export const focusRingClass =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current'

export const a11yCss = `
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
.skip-link {
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 100;
  padding: 0.75rem 1rem;
  background: #000;
  color: #fff;
}
.skip-link:focus {
  left: 0.5rem;
  top: 0.5rem;
}
`.trim()

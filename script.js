/**
 * HARSHIT SHARMA PORTFOLIO — script.js
 *
 * Modules:
 *   1. Theme Toggle (Dark / Light Mode)
 *   2. Custom Cursor
 *   3. Scroll-triggered Fade Animations
 *   4. Staggered Child Animations
 *   5. Navbar Scroll Behavior
 */


/* ============================================================
   1. THEME TOGGLE — Dark / Light Mode
   ============================================================
   - Reads saved preference from localStorage on load.
   - Falls back to OS-level prefers-color-scheme.
   - Writes choice to localStorage on toggle.
   - Applies [data-theme="dark"|"light"] on <html>.
   ============================================================ */

const ThemeManager = (() => {
  const HTML       = document.documentElement;
  const TOGGLE_BTN = document.getElementById('themeToggle');
  const STORAGE_KEY = 'hs-portfolio-theme';

  /** Detect the user's OS preference */
  function getSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  /** Load saved theme or fall back to system preference */
  function getSavedTheme() {
    return localStorage.getItem(STORAGE_KEY) || getSystemPreference();
  }

  /** Apply theme to <html> element */
  function applyTheme(theme) {
    HTML.setAttribute('data-theme', theme);
    // Update aria-label for accessibility
    if (TOGGLE_BTN) {
      TOGGLE_BTN.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      );
    }
  }

  /** Toggle between 'dark' and 'light' */
  function toggleTheme() {
    const current = HTML.getAttribute('data-theme') || 'light';
    const next    = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  /** Initialise */
  function init() {
    applyTheme(getSavedTheme());

    if (TOGGLE_BTN) {
      TOGGLE_BTN.addEventListener('click', toggleTheme);
    }

    // React to OS-level theme change at runtime
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      // Only auto-switch if the user hasn't set a manual preference
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  return { init };
})();


/* ============================================================
   2. CUSTOM CURSOR
   ============================================================
   - Follows mouse movement via CSS left/top.
   - Expands on hoverable elements.
   - Hidden on touch devices.
   ============================================================ */

const CursorManager = (() => {
  const cursor = document.getElementById('cursor');

  const HOVERABLES = [
    'a',
    'button',
    '.skill-card',
    '.edu-card',
    '.ach-card',
    '.theme-toggle',
  ].join(', ');

  function init() {
    if (!cursor) return;

    // Hide cursor on touch-only devices
    if ('ontouchstart' in window) {
      cursor.style.display = 'none';
      document.body.style.cursor = 'auto';
      return;
    }

    // Track mouse position
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top  = `${e.clientY}px`;
    });

    // Expand on interactive elements
    document.querySelectorAll(HOVERABLES).forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('expanded'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('expanded'));
    });

    // Hide cursor when it leaves the window
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
    });
  }

  return { init };
})();


/* ============================================================
   3. SCROLL-TRIGGERED FADE ANIMATIONS
   ============================================================
   - Uses IntersectionObserver for performance.
   - Once an element becomes visible, adds .visible class.
   - Threshold: 10% of the element must be on-screen.
   ============================================================ */

const ScrollAnimator = (() => {
  const FADE_CLASS = 'fade-up';
  const VISIBLE_CLASS = 'visible';

  function init() {
    const elements = document.querySelectorAll(`.${FADE_CLASS}`);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(VISIBLE_CLASS);
            // Stop observing once visible (one-time animation)
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
  }

  return { init };
})();


/* ============================================================
   4. STAGGERED CHILD ANIMATIONS
   ============================================================
   - Applies incremental transition-delay to .fade-up children
     inside grid/list containers, creating a cascade effect.
   ============================================================ */

const StaggerAnimator = (() => {
  const CONTAINERS = [
    '.skills-grid',
    '.edu-grid',
    '.ach-grid',
    '.exp-container',
    '.contact-links',
  ];

  const STAGGER_DELAY_MS = 100; // delay between each child (ms)

  function init() {
    CONTAINERS.forEach((selector) => {
      const container = document.querySelector(selector);
      if (!container) return;

      const children = container.querySelectorAll('.fade-up');
      children.forEach((child, index) => {
        child.style.transitionDelay = `${index * STAGGER_DELAY_MS}ms`;
      });
    });
  }

  return { init };
})();


/* ============================================================
   5. NAVBAR SCROLL BEHAVIOR
   ============================================================
   - Adds a subtle shadow class to the navbar when the user
     has scrolled down more than 20px.
   ============================================================ */

const NavbarManager = (() => {
  const navbar = document.getElementById('navbar');
  const SCROLL_THRESHOLD = 20;

  function onScroll() {
    if (!navbar) return;
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  function init() {
    if (!navbar) return;
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  return { init };
})();


/* ============================================================
   BOOTSTRAP — Run all modules when DOM is ready
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  CursorManager.init();
  StaggerAnimator.init(); // must run before ScrollAnimator so delays are set
  ScrollAnimator.init();
  NavbarManager.init();
});

import { writable, derived } from 'svelte/store';

enum Breakpoints {
  MOBILE = 768,
  TABLET = 992,
}

const windowWidth = writable(typeof window !== 'undefined' ? window.innerWidth : 0);

if (typeof window !== 'undefined') {
  window.addEventListener('resize', () => {
    windowWidth.set(window.innerWidth);
  });
}

export const isMobile = derived(windowWidth, $windowWidth => $windowWidth <= Breakpoints.MOBILE);
export const isTablet = derived(windowWidth, $windowWidth => $windowWidth <= Breakpoints.TABLET && $windowWidth > Breakpoints.MOBILE);
export const isDesktop = derived(windowWidth, $windowWidth => $windowWidth > Breakpoints.TABLET);
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

/**
 * Smooth scroll to a specific target element
 * @param {string|HTMLElement} target - Element selector or DOM element
 * @param {number} duration - Animation duration in seconds (default: 1)
 * @param {string} ease - GSAP easing function (default: "power3.inOut")
 * @param {number} offset - Pixel offset from top (default: 0)
 */
export const smoothScrollToElement = (target, duration = 1, ease = "power3.inOut", offset = 0) => {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  
  if (!element) {
    console.warn('Element not found:', target);
    return;
  }

  gsap.to(window, {
    scrollTo: {
      y: element,
      offsetY: offset
    },
    duration: duration,
    ease: ease
  });
};

/**
 * Smooth scroll to top of page
 * @param {number} duration - Animation duration in seconds (default: 1.5)
 * @param {string} ease - GSAP easing function (default: "power3.inOut")
 */
export const smoothScrollToTop = (duration = 1.5, ease = "power3.inOut") => {
  gsap.to(window, {
    scrollTo: 0,
    duration: duration,
    ease: ease
  });
};

/**
 * Smooth scroll to a specific Y position
 * @param {number} yPos - Y position in pixels
 * @param {number} duration - Animation duration in seconds (default: 1)
 * @param {string} ease - GSAP easing function (default: "power3.inOut")
 */
export const smoothScrollToPosition = (yPos, duration = 1, ease = "power3.inOut") => {
  gsap.to(window, {
    scrollTo: yPos,
    duration: duration,
    ease: ease
  });
};

/**
 * Create a continuous smooth scroll animation
 * @param {number} speed - Scroll speed (pixels per second)
 * @param {number} duration - Total animation duration
 */
export const autoScroll = (speed = 100, duration = 10) => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const targetPosition = Math.min(window.pageYOffset + speed * duration, maxScroll);

  gsap.to(window, {
    scrollTo: targetPosition,
    duration: duration,
    ease: "none"
  });
};

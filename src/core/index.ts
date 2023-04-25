import { init as particles } from './app';

/**
 * Entry point.
 */
particles();

declare global {
    interface Window {
        particles: typeof particles,
    }
}

window.particles = particles;

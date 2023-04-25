import { init as particles } from './app';

declare global {
    interface Window {
        particles: typeof particles,
    }
}

window.particles = particles;

export default particles;

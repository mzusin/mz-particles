import { init as particles } from './app';
declare global {
    interface Window {
        particles: typeof particles;
    }
}
export default particles;

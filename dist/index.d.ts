import { Vector2 } from 'mz-math';

declare module 'mz-particles' {

    export interface ISettings {
        $placeholder: HTMLElement;
        canvasColor?: string;
        particlesNumber: number;
        particlesColors?: string[];
        minSize?: number;
        maxSize?: number;
        minSpeed?: number;
        maxSpeed?: number;
        connected?: boolean;
        connectionSizeD?: number;
        connectionSizeT?: number;
        connectionSizeM?: number;
        connectionColor?: string;
        svgPathData?: string[];
        rotate?: boolean;
        scaleInOut?: boolean;
        maxScale?: number;
        minScale?: number;
        scaleStep?: number;
        fadeInOut?: boolean;
        opacityStep?: number;
    }
    export interface IParticle {
        center: Vector2;
        speed: Vector2;
        size: Vector2;
        color: string;
        rgbaColor: [number, number, number, number];
        svgPathData?: string;
        svgSize?: Vector2;
        angleRad: number;
        rotateCounterClockwise: boolean;
        scale: number;
        scaleDirection: number;
        opacity: number;
        opacityDirection: number;
    }
    export interface IState {
        $canvas: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
        connectionRgbColor: [number, number, number, number];
        particles: IParticle[];
    }

    export const DEFAULTS: ISettings;

    export const init: (settings?: ISettings) => HTMLCanvasElement | undefined;
    export const rgbaToString: (r: number, g: number, b: number, a: number) => string;
    export const drawConnections: (options: ISettings, state: IState) => void;
    export const createParticles: (options: ISettings, state: IState) => IParticle[];
    export const moveParticle: (particle: IParticle, options: ISettings, state: IState) => IParticle;
    export const drawParticle: (particle: IParticle, options: ISettings, state: IState) => void;
    export const mergeSettings: (defaults: ISettings, settings?: ISettings) => ISettings;

    export default init;
}
import { Vector2 } from 'mz-math';
export interface ISettings {
    canvasWidth?: number | string;
    canvasHeight?: number | string;
    canvasColor?: string;
    particlesNumber: number;
    particlesColors?: string[];
    minSize?: number;
    maxSize?: number;
    minSpeed?: number;
    maxSpeed?: number;
    connected?: boolean;
    maxConnectionSize?: number;
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

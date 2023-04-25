import { Vector2 } from 'mz-math';

export interface ISettings {

    $placeholder?: HTMLElement;

    // canvas settings -------------------
    canvasColor?: string;

    // particles props -------------------
    particlesNumber: number;
    particlesColors?: string[];
    minSize?: number;
    maxSize?: number;

    // speed ------------------------------
    minSpeed?: number;
    maxSpeed?: number;

    // connection lines -------------------
    connected?: boolean;
    connectionSizeD?: number;
    connectionSizeT?: number;
    connectionSizeM?: number;
    connectionColor?: string;

    // SVG shapes -------------------------
    svgPathData?: string[];

    // rotation effect ---------------
    rotate?: boolean;

    // scale effect ------------------
    scaleInOut?: boolean;
    maxScale?: number;
    minScale?: number;
    scaleStep?: number;

    // fade effect -------------------
    fadeInOut?: boolean;
    opacityStep?: number;
}

export interface IParticle {
    center: Vector2; // [cx, cy]
    speed: Vector2; // [speed x, speed y]
    size: Vector2;
    color: string;
    rgbaColor: [number, number, number, number];

    // SVG path props ------------
    svgPathData?: string;
    svgSize?: Vector2;

    // rotation effect ------------
    angleRad: number;
    rotateCounterClockwise: boolean;

    // scale effect ---------------
    scale: number;
    scaleDirection: number;

    // fade in/out ---------------
    opacity: number;
    opacityDirection: number;
}

export interface IState {
    $canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    connectionRgbColor: [number, number, number, number];
    particles: IParticle[];
}
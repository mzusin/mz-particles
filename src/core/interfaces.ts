import { Vector2 } from 'mz-math';

export interface ISettings {
    // canvas settings -------------------
    canvasWidth?: number|string;
    canvasHeight?: number|string;
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
    maxConnectionSize?: number;
    connectionColor?: [number, number, number]; // [r, g, b]

    // SVG shapes -------------------------
    svgPathData?: string[];

    // rotation effect ---------------
    rotate?: boolean;

    // scale effect ------------------
    scaleInOut?: boolean;
    maxScale?: number;
    minScale?: number;
    scaleStep?: number;
}

export interface IParticle {
    center: Vector2; // [cx, cy]
    speed: Vector2; // [speed x, speed y]
    size: Vector2;
    color: string;

    // SVG path props ------------
    svgPathData?: string;
    svgSize?: Vector2;

    // rotation effect ------------
    angleRad: number;
    rotateCounterClockwise: boolean;

    // scale effect ---------------
    scale: number;
    scaleDirection: number;
}
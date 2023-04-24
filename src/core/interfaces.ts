import { Vector2 } from 'mz-math/types/types';

export interface ISettings {
    canvasWidth?: number|string;
    canvasHeight?: number|string;
    canvasColor?: string;

    particlesNumber: number,

    minSpeed?: number;
    maxSpeed?: number;

    minSize?: number;
    maxSize?: number;

    maxConnectionSize?: number;
    connectionColor?: [number, number, number]; // [r, g, b]

    svgPath?: string;
    rotate?: boolean;
}

export interface IParticle {
    center: Vector2; // [cx, cy]
    speed: Vector2; // [speed x, speed y]
    size: Vector2;
    color: string;
    angleRad: number;
    rotateCounterClockwise: boolean;
}
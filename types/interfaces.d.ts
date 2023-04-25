import { Vector2 } from 'mz-math';
export interface ISettings {
    canvasWidth?: number | string;
    canvasHeight?: number | string;
    canvasColor?: string;
    particlesNumber: number;
    minSpeed?: number;
    maxSpeed?: number;
    minSize?: number;
    maxSize?: number;
    maxConnectionSize?: number;
    connectionColor?: [number, number, number];
    svgPathData?: string;
    rotate?: boolean;
}
export interface IParticle {
    center: Vector2;
    speed: Vector2;
    size: Vector2;
    color: string;
    angleRad: number;
    rotateCounterClockwise: boolean;
}

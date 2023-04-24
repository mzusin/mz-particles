import { Vector2 } from 'mz-math/types/types';

export interface ISettings {
    canvasWidth?: number;
    canvasHeight?: number;
    canvasColor?: string;

    particlesNumber: number,

    minSpeed?: number;
    maxSpeed?: number;

    minSize?: number;
    maxSize?: number;

    maxConnectionSize?: number;
    connectionColor?: string;
}

export interface IParticle {
    center: Vector2; // [cx, cy]
    speed: Vector2; // [speed x, speed y]
    size: number;
    color: string;
}
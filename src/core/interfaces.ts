import { Vector2 } from 'mz-math/types/types';

export interface ISettings {
    canvasWidth?: number;
    canvasHeight?: number;

    particlesNumber: number,

    minSpeed?: number;
    maxSpeed?: number;

    minSize?: number;
    maxSize?: number;
}

export interface IParticle {
    center: Vector2; // [cx, cy]
    speed: Vector2; // [speed x, speed y]
    size: number;
    color: string;
}
import { Vector2 } from 'mz-math/types/types';

export interface IParticle {
    center: Vector2; // [cx, cy]
    direction: Vector2; // [direction x, direction y]
    size: number;
    color: string;
}
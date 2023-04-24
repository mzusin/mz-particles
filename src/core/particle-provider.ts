import { IParticle } from './interfaces';
import { circle } from 'mz-canvas';
import { Vector2 } from 'mz-math/types/types';

export const drawParticle = (particle: IParticle, ctx: CanvasRenderingContext2D) => {

    circle({
        cx: particle.center[0],
        cy: particle.center[1],
        r: particle.size,
        fillStyle: particle.color,
    }, ctx);
};

export const moveParticle = (particle: IParticle, $canvas: HTMLCanvasElement) : IParticle => {

    const copy = { ...particle };

    const [cx, cy] = particle.center;
    const direction: Vector2 = [...particle.direction];

    if(cx > $canvas.width || cx < 0) {
        direction[0] = -direction[0];
    }

    if(cy > $canvas.height || cy < 0) {
        direction[1] = -direction[1];
    }

    copy.direction = direction;
    copy.center = [cx + copy.direction[0], cy + copy.direction[1]];
    return copy;
};
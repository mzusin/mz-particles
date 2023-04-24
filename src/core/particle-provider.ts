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
    const speed: Vector2 = [...particle.speed];

    if(cx > $canvas.width || cx < 0) {
        speed[0] = -speed[0];
    }

    if(cy > $canvas.height || cy < 0) {
        speed[1] = -speed[1];
    }

    copy.speed = speed;
    copy.center = [cx + copy.speed[0], cy + copy.speed[1]];
    return copy;
};
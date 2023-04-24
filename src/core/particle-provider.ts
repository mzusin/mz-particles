import { IParticle, ISettings } from './interfaces';
import { circle } from 'mz-canvas';
import { Vector2 } from 'mz-math';

export const drawParticle = (particle: IParticle, ctx: CanvasRenderingContext2D, options: ISettings) => {

    if(!options.svgPath){
        circle({
            cx: particle.center[0],
            cy: particle.center[1],
            r: particle.size[0],
            fillStyle: particle.color,
        }, ctx);
        return;
    }

    const [w, h] = particle.size;

    const path = new Path2D(options.svgPath);
    ctx.save();

    const [cx, cy] = [particle.center[0] - w/2, particle.center[1] - h/2];
    ctx.translate(cx, cy);

    if(options.rotate) {
        ctx.translate(w / 2, h / 2);
        ctx.rotate(particle.angleRad);
        ctx.translate(-w / 2, -h / 2);
    }

    ctx.fillStyle = particle.color;
    ctx.fill(path);
    ctx.restore();
};

export const moveParticle = (particle: IParticle, $canvas: HTMLCanvasElement, options: ISettings) : IParticle => {

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

    if(options.rotate) {
        if(particle.rotateCounterClockwise){
            copy.angleRad += Math.PI / 180;
        }
        else{
            copy.angleRad -= Math.PI / 180;
        }
    }

    return copy;
};
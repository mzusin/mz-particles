import { IParticle, ISettings } from '../interfaces';
import { circle } from 'mz-canvas';
import { getRandom, getRandomBoolean, getRandomHexColor, getRandomItemFromArray, Vector2 } from 'mz-math';
import { getPathBBox } from 'mz-svg';

export const drawParticle = (particle: IParticle, ctx: CanvasRenderingContext2D, options: ISettings) => {

    if(!options.svgPathData){
        circle({
            cx: particle.center[0],
            cy: particle.center[1],
            r: particle.size[0],
            fillStyle: particle.color,
        }, ctx);
        return;
    }

    const [w, h] = particle.size;

    const path = new Path2D(options.svgPathData);
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

    const [cx, cy]: Vector2 = particle.center;
    const speed: Vector2 = [...particle.speed] as Vector2;

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

export const createParticles = (options: ISettings, $canvas: HTMLCanvasElement) : IParticle[] => {
    const particles: IParticle[] = [];
    let particleSize: Vector2 = [0, 0];

    if(options.svgPathData){
        const bbox = getPathBBox(options.svgPathData);
        if(bbox){
            particleSize = [bbox.w, bbox.h];
        }
    }

    for(let i= 0; i< options.particlesNumber; i++) {

        if(!options.svgPathData){
            const rnd = getRandom(options.minSize as number, options.maxSize as number);
            particleSize = [rnd, rnd]
        }

        let color = '#000';

        if(options.particlesColors && options.particlesColors.length > 0){
            color = getRandomItemFromArray(options.particlesColors);
        }
        else{
            color = getRandomHexColor();
        }

        particles.push({
            center: [
                getRandom(0, $canvas.width),
                getRandom(0, $canvas.height),
            ],
            speed: [
                getRandom(options.minSpeed as number, options.maxSpeed as number),
                getRandom(options.minSpeed as number, options.maxSpeed as number),
            ],
            size: particleSize,
            color,
            angleRad: 0,
            rotateCounterClockwise: getRandomBoolean(),
        });
    }

    return particles;
};

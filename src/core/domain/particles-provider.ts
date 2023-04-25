import { IParticle, ISettings } from '../interfaces';
import { circle } from 'mz-canvas';
import { getRandom, getRandomBoolean, getRandomHexColor, getRandomItemFromArray, Vector2 } from 'mz-math';
import { getPathBBox } from 'mz-svg';
import tinycolor from 'tinycolor2';

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

    const path = new Path2D(particle.svgPathData);
    ctx.save();

    const [cx, cy] = [particle.center[0] - w/2, particle.center[1] - h/2];
    ctx.translate(cx, cy);

    if(particle.svgSize){
        // scale the path -------------------------------
        ctx.translate(w / 2, h / 2);
        ctx.scale(...particle.svgSize);
        ctx.translate(-w / 2, -h / 2);
    }

    if(options.rotate) {
        ctx.translate(w / 2, h / 2);
        ctx.rotate(particle.angleRad);
        ctx.translate(-w / 2, -h / 2);
    }

    if(options.scaleInOut){
        ctx.translate(w / 2, h / 2);
        ctx.scale(particle.scale, particle.scale);
        ctx.translate(-w / 2, -h / 2);
    }

    if(options.fadeInOut){
        ctx.fillStyle = `rgba(${ particle.rgbaColor[0] }, ${ particle.rgbaColor[1] }, ${ particle.rgbaColor[2] }, ${ particle.opacity } )`;
    }
    else{
        ctx.fillStyle = particle.color;
    }

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

    if(options.scaleInOut){
        if(copy.scaleDirection > 0){
            copy.scale += options.scaleStep as number;
        }
        else{
            copy.scale -= options.scaleStep as number;
        }

        if(copy.scale > (options.maxScale as number)){
            copy.scale = options.maxScale as number;
            copy.scaleDirection = -1;
        }

        if(copy.scale < (options.minScale as number)){
            copy.scale = options.minScale as number;
            copy.scaleDirection = 1;
        }
    }

    if(options.fadeInOut){
        if(copy.opacityDirection > 0){
            copy.opacity += options.opacityStep as number;
        }
        else{
            copy.opacity -= options.opacityStep as number;
        }

        if(copy.opacity > 1){
            copy.scale = 1;
            copy.opacityDirection = -1;
        }

        if(copy.opacity < 0){
            copy.opacity = 0;
            copy.opacityDirection = 1;
        }
    }

    return copy;
};

export const createParticles = (options: ISettings, $canvas: HTMLCanvasElement) : IParticle[] => {
    const particles: IParticle[] = [];
    let svgPathData: string|undefined = undefined;
    let svgSize: Vector2|undefined = undefined;

    for(let i= 0; i< options.particlesNumber; i++) {

        const rnd = getRandom(options.minSize as number, options.maxSize as number);
        let particleSize: Vector2 = [rnd, rnd];

        if(options.svgPathData && options.svgPathData.length > 0){
            svgPathData = getRandomItemFromArray(options.svgPathData);
            const bbox = getPathBBox(svgPathData);

            if(bbox){
                svgSize = [
                    particleSize[0] / bbox.w,
                    particleSize[1] / bbox.h,
                ];
            }
        }

        let color = '#000';

        if(options.particlesColors && options.particlesColors.length > 0){
            color = getRandomItemFromArray(options.particlesColors);
        }
        else{
            color = getRandomHexColor();
        }

        const tColor = tinycolor(color);
        const tColorRGB = tColor.toRgb();

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
            rgbaColor: [tColorRGB.r, tColorRGB.g, tColorRGB.b, tColorRGB.a],

            // SVG path props ----------
            svgPathData,
            svgSize,

            // rotation effect ------------
            angleRad: 0,
            rotateCounterClockwise: getRandomBoolean(),

            // scale effect ---------------
            scale: ((options.minScale as number) + (options.maxScale as number)) / 2,
            scaleDirection: getRandomItemFromArray([-1, 1]),

            // fade in/out effect ---------
            opacity: getRandom(0, 1),
            opacityDirection: getRandomItemFromArray([-1, 1]),
        });
    }

    return particles;
};

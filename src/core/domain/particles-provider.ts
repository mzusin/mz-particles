import { IParticle, ISettings, IState } from '../interfaces';
import { circle } from 'mz-canvas';
import { getRandom, getRandomBoolean, getRandomHexColor, getRandomItemFromArray, Vector2 } from 'mz-math';
import { getPathBBox } from 'mz-svg';
import tinycolor from 'tinycolor2';
import { rgbaToString } from './colors-provider';

/**
 * This method is called once on the particles' initialization.
 */
export const createParticles = (options: ISettings, state: IState) : IParticle[] => {

    const { $canvas } = state;

    const particles: IParticle[] = [];

    let svgPathData: string|undefined = undefined;
    let svgSize: Vector2|undefined = undefined;
    let scaleSize: Vector2|undefined = undefined;

    const minSize = options.minSize as number;
    const maxSize = options.maxSize as number;
    const minSpeed = options.minSpeed as number;
    const maxSpeed = options.maxSpeed as number;
    const maxScale = options.maxScale as number;

    const minScale = options.minScale as number;

    for(let i= 0; i< state.vpParticlesNumber; i++) {

        const rnd = getRandom(minSize, maxSize);
        const particleSize: Vector2 = [rnd, rnd];

        // handle case when provided SVG path data -------------
        if(options.svgPathData && options.svgPathData.length > 0){

            // get random SVG shape from the provided list, and calculate it's size
            svgPathData = getRandomItemFromArray(options.svgPathData);
            const bbox = getPathBBox(svgPathData);

            if(bbox){
                svgSize = [
                    bbox.w,
                    bbox.h,
                ];
                scaleSize = [
                    particleSize[0] / bbox.w,
                    particleSize[1] / bbox.h,
                ];
            }
        }

        let color;

        if(options.particlesColors && options.particlesColors.length > 0){
            color = getRandomItemFromArray(options.particlesColors);
        }
        else{
            // when no color is provided ---> get random color
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
                getRandom(minSpeed, maxSpeed),
                getRandom(minSpeed, maxSpeed),
            ],
            size: particleSize,

            color,
            rgbaColor: [tColorRGB.r, tColorRGB.g, tColorRGB.b, tColorRGB.a],

            // SVG path props ----------
            svgPathData,
            svgSize,
            scaleSize,

            // rotation effect ------------
            angleRad: 0,
            rotateCounterClockwise: getRandomBoolean(),

            // scale effect ---------------
            scale: (minScale + maxScale) / 2,
            scaleDirection: getRandomItemFromArray([-1, 1]),

            // fade in/out effect ---------
            opacity: getRandom(0, 1),
            opacityDirection: getRandomItemFromArray([-1, 1]),
        });
    }

    return particles;
};

export const moveParticle = (particle: IParticle, options: ISettings, state: IState) : IParticle => {

    const { $canvas } = state;

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
        const scaleStep = options.scaleStep as number;
        const maxScale = options.maxScale as number;
        const minScale = options.minScale as number;

        if(copy.scaleDirection > 0){
            copy.scale += scaleStep;
        }
        else{
            copy.scale -= scaleStep;
        }

        if(copy.scale > maxScale){
            copy.scale = maxScale;
            copy.scaleDirection = -1;
        }

        if(copy.scale < minScale){
            copy.scale = minScale;
            copy.scaleDirection = 1;
        }
    }

    if(options.fadeInOut){
        const opacityStep = options.opacityStep as number;

        if(copy.opacityDirection > 0){
            copy.opacity += opacityStep;
        }
        else{
            copy.opacity -= opacityStep;
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

export const drawParticle = (particle: IParticle, options: ISettings, state: IState) => {

    const { ctx } = state;

    if(!options.svgPathData){

        ctx.save();

        const { size } = particle;
        let r = size[0];

        if(options.scaleInOut){
            r *= particle.scale;
        }

        const fillStyle = options.fadeInOut ?
            rgbaToString(
                particle.rgbaColor[0],
                particle.rgbaColor[1],
                particle.rgbaColor[2],
                particle.opacity
            ) :
            particle.color;

        circle({
            cx: particle.center[0],
            cy: particle.center[1],
            r,
            fillStyle,
        }, ctx);

        ctx.restore();
        return;
    }

    const [w, h] = particle.svgSize ? particle.svgSize : particle.size;

    const path = new Path2D(particle.svgPathData);
    ctx.save();

    const halfWidth = w/2;
    const halfHeight = h/2;

    const [cx, cy] = [particle.center[0] - halfWidth, particle.center[1] - halfHeight];
    ctx.translate(cx, cy);

    if(particle.scaleSize){
        // scale the path -------------------------------
        ctx.translate(halfWidth, halfHeight);
        ctx.scale(...particle.scaleSize);
        ctx.translate(-halfWidth, -halfHeight);
    }

    if(options.rotate) {
        ctx.translate(halfWidth, halfHeight);
        ctx.rotate(particle.angleRad);
        ctx.translate(-halfWidth, -halfHeight);
    }

    if(options.scaleInOut){
        ctx.translate(halfWidth, halfHeight);
        ctx.scale(particle.scale, particle.scale);
        ctx.translate(-halfWidth, -halfHeight);
    }

    if(options.fadeInOut){
        ctx.fillStyle = rgbaToString(
            particle.rgbaColor[0],
            particle.rgbaColor[1],
            particle.rgbaColor[2],
            particle.opacity,
        );
    }
    else{
        ctx.fillStyle = particle.color;
    }

    ctx.fill(path);
    ctx.restore();
};



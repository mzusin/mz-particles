import { canvas, line, rect, setCanvasSize } from 'mz-canvas';
import { IParticle, ISettings } from './interfaces';
import { getRandomHexColor, getRandom, animate, v2Distance, getRandomBoolean } from 'mz-math';
import { drawParticle, moveParticle } from './particle-provider';
import { getPathBBox } from 'mz-svg';
import { Vector2 } from 'mz-math';

const defaults: ISettings = {
    canvasWidth: 600,
    canvasHeight: 600,
    canvasColor: 'rgb(17, 24, 39)',

    particlesNumber: 40,

    minSpeed: 0.5,
    maxSpeed: 2,

    minSize: 5,
    maxSize: 10,

    maxConnectionSize: 150,
    connectionColor: [45, 56, 91],
};

/**
 * Merge settings with the defaults
 */
const mergeSettings = (defaults: ISettings, settings?: ISettings) : ISettings => {
    if(!settings) return { ...defaults };
    return { ...defaults, ...settings };
};

const createParticles = (options: ISettings, $canvas: HTMLCanvasElement) : IParticle[] => {
    const particles: IParticle[] = [];
    let particleSize: Vector2 = [0, 0];

    if(options.svgPath){
        const bbox = getPathBBox(options.svgPath);
        particleSize = [bbox.w, bbox.h];
    }

    for(let i= 0; i< options.particlesNumber; i++) {

        if(!options.svgPath){
            const rnd = getRandom(options.minSize, options.maxSize);
            particleSize = [rnd, rnd]
        }

        particles.push({
            center: [
                getRandom(0, $canvas.width),
                getRandom(0, $canvas.height),
            ],
            speed: [
                getRandom(options.minSpeed, options.maxSpeed),
                getRandom(options.minSpeed, options.maxSpeed),
            ],
            size: particleSize,
            color: getRandomHexColor(), // TODO: configure this
            angleRad: 0,
            rotateCounterClockwise: getRandomBoolean(),
        });
    }

    return particles;
};

const drawConnections = (options: ISettings, ctx: CanvasRenderingContext2D, particles: IParticle[]) => {
    for(let i= 0; i<particles.length; i++){
        const particle1 = particles[i];

        for(let j= 0; j<particles.length; j++){
            const particle2 = particles[j];

            const distance = v2Distance(particle1.center, particle2.center);
            if(distance < options.maxConnectionSize){

                const opacity = options.maxConnectionSize === 0 ? 1 : 1 - distance / options.maxConnectionSize;

                line({
                    x1: particle1.center[0],
                    y1: particle1.center[1],
                    x2: particle2.center[0],
                    y2: particle2.center[1],
                    strokeStyle: `rgba(${ options.connectionColor[0] }, ${ options.connectionColor[1] }, ${ options.connectionColor[2] }, ${ opacity } )`,
                }, ctx);
            }
        }
    }
};

const redraw = (options: ISettings, $canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, particles: IParticle[]) => {
    rect({
        x: 0,
        y: 0,
        w: $canvas.width,
        h: $canvas.height,
        fillStyle: options.canvasColor,
    }, ctx);

    // draw the particle connections -------------------------------
    drawConnections(options, ctx, particles);

    // draw the updated particles ------------------
    for(let i= 0; i<particles.length; i++){
        const particle = particles[i];
        drawParticle(particle, ctx, options);
        particles[i] = moveParticle(particle, $canvas, options);
    }
};

/**
 * Entry point.
 */
export const particles = (settings?: ISettings) => {

    const options = mergeSettings(defaults, settings);

    const canvasProps = {
        width: options.canvasWidth,
        height: options.canvasHeight,
    };

    const { ctx, $canvas } = canvas(canvasProps);

    // create random particles -----------------------------
    const particles = createParticles(options, $canvas);

    const api = animate({

        // A function to be called on each animation frame.
        // It receives an object of type IAnimationResult.
        callback: () => {
            redraw(options, $canvas, ctx, particles);
        },
        restartOnResize: true,
        resizeCallback: () => {
            setCanvasSize($canvas, ctx, canvasProps);
        },
    });

    // Starts the animation.
    api.start();

    document.body.append($canvas);
};

declare global {
    interface Window {
        particles: typeof particles,
    }
}

window.particles = particles;

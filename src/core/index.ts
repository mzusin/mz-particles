import { canvas, rect } from 'mz-canvas';
import { IParticle, ISettings } from './interfaces';
import { getRandomHexColor, getRandomInt, animate } from 'mz-math';
import { drawParticle, moveParticle } from './particle-provider';

const defaults: ISettings = {
    canvasWidth: 600,
    canvasHeight: 600,
    particlesNumber: 10,

    minSpeed: 0.1,
    maxSpeed: 5,

    minSize: 10,
    maxSize: 50,
};

/**
 * Merge settings with the defaults
 */
const mergeSettings = (defaults: ISettings, settings?: ISettings) : ISettings => {
    if(!settings) return { ...defaults };
    return { ...defaults, ...settings };
};

export const particles = (settings?: ISettings) => {

    const options = mergeSettings(defaults, settings);

    const { ctx, $canvas } =canvas({
        width: options.canvasWidth,
        height: options.canvasHeight,
    });

    // create random particles ---------------------------
    const particles: IParticle[] = [];
    for(let i= 0; i< options.particlesNumber; i++) {
        particles.push({
            center: [
                getRandomInt(0, $canvas.width),
                getRandomInt(0, $canvas.height),
            ],
            speed: [
                getRandomInt(options.minSpeed, options.maxSpeed),
                getRandomInt(options.minSpeed, options.maxSpeed),
            ],
            size: getRandomInt(options.minSize, options.maxSize),
            color: getRandomHexColor(), // TODO: configure this
        });
    }

    const api = animate({

        // A function to be called on each animation frame.
        // It receives an object of type IAnimationResult.
        callback: () => {
            rect({
                x: 0,
                y: 0,
                w: $canvas.width,
                h: $canvas.height,
                clear: true
            }, ctx);

            for(let i= 0; i<particles.length; i++){
                const particle = particles[i];
                drawParticle(particle, ctx);
                particles[i] = moveParticle(particle, $canvas);
            }
        },
        restartOnResize: true,
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

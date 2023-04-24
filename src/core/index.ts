import { canvas, line, rect, setCanvasSize } from 'mz-canvas';
import { IParticle, ISettings } from './interfaces';
import { getRandomHexColor, getRandom, animate, v2Distance } from 'mz-math';
import { drawParticle, moveParticle } from './particle-provider';

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
    connectionColor: '#2d385b',
};

/**
 * Merge settings with the defaults
 */
const mergeSettings = (defaults: ISettings, settings?: ISettings) : ISettings => {
    if(!settings) return { ...defaults };
    return { ...defaults, ...settings };
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
    const particles: IParticle[] = [];
    for(let i= 0; i< options.particlesNumber; i++) {
        particles.push({
            center: [
                getRandom(0, $canvas.width),
                getRandom(0, $canvas.height),
            ],
            speed: [
                getRandom(options.minSpeed, options.maxSpeed),
                getRandom(options.minSpeed, options.maxSpeed),
            ],
            size: getRandom(options.minSize, options.maxSize),
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
                fillStyle: options.canvasColor,
            }, ctx);

            for(let i= 0; i<particles.length; i++){
                const particle = particles[i];

                for(let j= 0; j<particles.length; j++){
                    const particle2 = particles[j];
                    const distance = v2Distance(particle.center, particle2.center);
                    if(distance < options.maxConnectionSize){
                        line({
                            x1: particle.center[0],
                            y1: particle.center[1],
                            x2: particle2.center[0],
                            y2: particle2.center[1],
                            strokeStyle: options.connectionColor,
                        }, ctx);
                    }
                }
            }

            for(let i= 0; i<particles.length; i++){
                const particle = particles[i];
                drawParticle(particle, ctx);
                particles[i] = moveParticle(particle, $canvas);
            }
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

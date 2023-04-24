import { canvas, rect } from 'mz-canvas';
import { IParticle } from './interfaces';
import { getRandomHexColor, getRandomInt, animate } from 'mz-math';
import { drawParticle, moveParticle } from './particle-provider';

export const particles = () => {

    const { ctx, $canvas } =canvas({
        width: 600, // TODO: pass width and height from props
        height: 600,
    });

    // create random particles
    // TODO - the number of particles should be a user setting
    const particles: IParticle[] = [];
    for(let i= 0; i< 10; i++) {
        particles.push({
            center: [getRandomInt(0, $canvas.width), getRandomInt(0, $canvas.height)], // TODO: configure this - [cx, cy]
            direction: [getRandomInt(1, 10), getRandomInt(1, 10)], // // TODO: configure this - [cx, cy] [direction x, direction y]
            size: getRandomInt(10, 50), // TODO: configure this
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

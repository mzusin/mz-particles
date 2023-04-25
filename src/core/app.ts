import { IParticle, ISettings, IState } from './interfaces';
import { drawConnections } from './domain/connections-provider';
import { createParticles, drawParticle, moveParticle } from './domain/particles-provider';
import { DEFAULTS, mergeSettings } from './domain/settings-provider';
import { canvas, rect, setCanvasSize } from 'mz-canvas';
import { animate } from 'mz-math';
import tinycolor from 'tinycolor2';

const redraw = (options: ISettings, $canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, particles: IParticle[], state: IState) => {

    rect({
        x: 0,
        y: 0,
        w: $canvas.width,
        h: $canvas.height,
        clear: true,
    }, ctx);

    if(options.canvasColor){
        rect({
            x: 0,
            y: 0,
            w: $canvas.width,
            h: $canvas.height,
            fillStyle: options.canvasColor,
        }, ctx);
    }

    // draw the particle connections -------------------------------
    if(options.connected){
        drawConnections(options, ctx, particles, state);
    }

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
export const init = (settings?: ISettings) => {

    const options = mergeSettings(DEFAULTS, settings);

    // parse connection lines color ----------
    const connectionsColor = tinycolor(options.connectionColor);
    const tConnectionsRGB = connectionsColor.toRgb();

    const state: IState = {
        connectionRgbColor: [tConnectionsRGB.r, tConnectionsRGB.g, tConnectionsRGB.b, tConnectionsRGB.a],
    };

    const canvasProps = {
        width: options.canvasWidth as number|string,
        height: options.canvasHeight as number|string,
    };

    const { ctx, $canvas } = canvas(canvasProps);

    // create random particles -----------------------------
    const particles = createParticles(options, $canvas);

    const api = animate({

        // A function to be called on each animation frame.
        // It receives an object of type IAnimationResult.
        callback: () => {
            if(!ctx) return;
            redraw(options, $canvas, ctx, particles, state);
        },
        restartOnResize: true,
        resizeCallback: () => {
            setCanvasSize($canvas, ctx, canvasProps);
        },
    });

    // Starts the animation.
    api.start();

    // document.body.append($canvas);
    return $canvas;
};
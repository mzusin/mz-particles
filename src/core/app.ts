import { ISettings, IState } from './interfaces';
import { drawConnections } from './domain/connections-provider';
import { createParticles, drawParticle, moveParticle } from './domain/particles-provider';
import { DEFAULTS, mergeSettings } from './domain/settings-provider';
import { canvas, IRectProps, rect, setCanvasSize } from 'mz-canvas';
import { animate } from 'mz-math';
import tinycolor from 'tinycolor2';

const redraw = (options: ISettings, state: IState) => {

    const { $canvas, ctx } = state;

    // set bg color or clear the canvas ---------------------------
    const rectProps: IRectProps = {
        x: 0,
        y: 0,
        w: $canvas.width,
        h: $canvas.height,
    };

    if(options.canvasColor){
        rectProps.fillStyle = options.canvasColor;
    }
    else{
        rectProps.clear = true;
    }

    rect(rectProps, ctx);

    // draw the particle connections -------------------------------
    if(options.connected){
        drawConnections(options, state);
    }

    // draw the updated particles ------------------
    for(let i= 0; i<state.particles.length; i++){
        const particle = state.particles[i];
        drawParticle(particle, options, state);
        state.particles[i] = moveParticle(particle, options, state);
    }
};

/**
 * Entry point.
 */
export const init = (settings?: ISettings) => {

    const options = mergeSettings(DEFAULTS, settings);

    const canvasProps = {
        width: options.canvasWidth as number|string,
        height: options.canvasHeight as number|string,
    };

    const { ctx, $canvas } = canvas(canvasProps);

    if(!ctx) return;

    // parse connection lines color ----------
    const connectionsColor = tinycolor(options.connectionColor);
    const tConnectionsRGB = connectionsColor.toRgb();

    const state: IState = {
        connectionRgbColor: [tConnectionsRGB.r, tConnectionsRGB.g, tConnectionsRGB.b, tConnectionsRGB.a],
        particles: [],
        ctx,
        $canvas,
    };

    // create random particles -----------------------------
    state.particles = createParticles(options, state);

    const api = animate({

        // A function to be called on each animation frame.
        // It receives an object of type IAnimationResult.
        callback: () => {
            if(!ctx) return;
            redraw(options, state);
        },
        restartOnResize: true,
        resizeCallback: () => {
            setCanvasSize($canvas, ctx, canvasProps);
            redraw(options, state);
        },
    });

    // Starts the animation.
    api.start();

    // document.body.append($canvas);
    return $canvas;
};
import { IParticle, ISettings, IState } from '../interfaces';
import { line } from 'mz-canvas';
import { v2Distance } from 'mz-math';

/**
 * Draw connection between the shapes.
 */
export const drawConnections = (options: ISettings, ctx: CanvasRenderingContext2D, particles: IParticle[], state: IState) => {

    const maxConnectionSize = options.maxConnectionSize as number;

    for(let i= 0; i<particles.length; i++){
        const particle1 = particles[i];

        for(let j= 0; j<particles.length; j++){
            const particle2 = particles[j];

            const distance = v2Distance(particle1.center, particle2.center);
            if(distance < maxConnectionSize){

                const opacity = options.maxConnectionSize === 0 ? 1 : 1 - distance / maxConnectionSize;

                line({
                    x1: particle1.center[0],
                    y1: particle1.center[1],
                    x2: particle2.center[0],
                    y2: particle2.center[1],
                    strokeStyle: `rgba(${ state.connectionRgbColor[0] }, ${ state.connectionRgbColor[1] }, ${ state.connectionRgbColor[2] }, ${ opacity } )`,
                }, ctx);
            }
        }
    }
};
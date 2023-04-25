import { ISettings, IState } from '../interfaces';
import { line } from 'mz-canvas';
import { v2Distance } from 'mz-math';
import { rgbaToString } from './colors-provider';
import { getViewPortSize, MOBILE_BREAK_POINT, TABLET_BREAK_POINT } from './viewport-provider';

const getConnectionSizePerViewport = (options: ISettings, placeholderWidth: number) : number => {

    const viewport = getViewPortSize();
    const vw = viewport[0];

    if(options.connectionSizeM !== undefined && vw <= MOBILE_BREAK_POINT){
        return options.connectionSizeM * placeholderWidth;
    }

    if(options.connectionSizeT !== undefined && vw <= TABLET_BREAK_POINT){
        return options.connectionSizeT * placeholderWidth;
    }

    return options.connectionSizeD as number * placeholderWidth;
};

/**
 * Draw connection between the shapes.
 */
export const drawConnections = (options: ISettings, state: IState) => {

    const { particles, ctx, connectionRgbColor } = state;

    const rect = options.$placeholder?.getBoundingClientRect();
    const placeholderWidth = rect?.width || 0;
    const maxConnectionSize = getConnectionSizePerViewport(options, placeholderWidth);

    for(let i= 0; i<particles.length; i++){
        const particle1 = particles[i];

        for(let j= 0; j<particles.length; j++){
            const particle2 = particles[j];

            const distance = v2Distance(particle1.center, particle2.center);

            if(distance < maxConnectionSize){

                const opacity = options.connectionSizeD === 0 ? 1 : (1 - distance / maxConnectionSize);

                line({
                    x1: particle1.center[0],
                    y1: particle1.center[1],
                    x2: particle2.center[0],
                    y2: particle2.center[1],
                    strokeStyle: rgbaToString(
                        connectionRgbColor[0],
                        connectionRgbColor[1],
                        connectionRgbColor[2],
                        opacity,
                    ),
                }, ctx);
            }
        }
    }
};
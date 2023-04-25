import { ISettings } from '../interfaces';

export const DEFAULTS: ISettings = {
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
export const mergeSettings = (defaults: ISettings, settings?: ISettings) : ISettings => {
    if(!settings) return { ...defaults };
    return { ...defaults, ...settings };
};

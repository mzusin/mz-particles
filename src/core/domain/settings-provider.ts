import { ISettings } from '../interfaces';

export const DEFAULTS: ISettings = {
    // canvas settings --------------
    canvasWidth: 600,
    canvasHeight: 600,
    // canvasColor: 'rgb(17, 24, 39)',

    particlesNumber: 40,
    particlesColors: [],

    minSpeed: 0.5,
    maxSpeed: 2,

    minSize: 5,
    maxSize: 10,

    // connection lines ------------
    connected: true,
    maxConnectionSize: 150,
    connectionColor: [45, 56, 91],

    // scale effect
    maxScale: 2,
    minScale: 0.5,
    scaleStep: 0.01,
};

/**
 * Merge settings with the defaults
 */
export const mergeSettings = (defaults: ISettings, settings?: ISettings) : ISettings => {
    if(!settings) return { ...defaults };
    return { ...defaults, ...settings };
};

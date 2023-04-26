import { ISettings } from '../interfaces';

export const DEFAULTS: ISettings = {
    particlesNumber: 40,
    particlesColors: [],

    minSpeed: -2,
    maxSpeed: 2,

    minSize: 5,
    maxSize: 10,

    // connection lines ------------
    connected: true,
    connectionColor: 'rgb(70,126,150)',
    connectionSize: 0.09,
    lgConnectionSize: 0.15,
    mdConnectionSize: 0.2,
    smConnectionSize: 0.2,

    // scale effect
    maxScale: 2,
    minScale: 0.5,
    scaleStep: 0.01,

    // fade in/out effect ---------
    opacityStep: 0.001,
};

/**
 * Merge settings with the defaults
 */
export const mergeSettings = (defaults: ISettings, settings?: ISettings) : ISettings => {
    if(!settings) return { ...defaults };
    return { ...defaults, ...settings };
};

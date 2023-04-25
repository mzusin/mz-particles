import { IParticle, ISettings, IState } from '../interfaces';
/**
 * This method is called once on the particles' initialization.
 */
export declare const createParticles: (options: ISettings, state: IState) => IParticle[];
export declare const moveParticle: (particle: IParticle, options: ISettings, state: IState) => IParticle;
export declare const drawParticle: (particle: IParticle, options: ISettings, state: IState) => void;

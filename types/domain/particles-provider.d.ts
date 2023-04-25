import { IParticle, ISettings, IState } from '../interfaces';
export declare const drawParticle: (particle: IParticle, options: ISettings, state: IState) => void;
export declare const moveParticle: (particle: IParticle, options: ISettings, state: IState) => IParticle;
export declare const createParticles: (options: ISettings, state: IState) => IParticle[];

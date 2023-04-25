import { IParticle, ISettings } from '../interfaces';
export declare const drawParticle: (particle: IParticle, ctx: CanvasRenderingContext2D, options: ISettings) => void;
export declare const moveParticle: (particle: IParticle, $canvas: HTMLCanvasElement, options: ISettings) => IParticle;
export declare const createParticles: (options: ISettings, $canvas: HTMLCanvasElement) => IParticle[];

import { ISettings } from '../interfaces';
export declare const DEFAULTS: ISettings;
/**
 * Merge settings with the defaults
 */
export declare const mergeSettings: (defaults: ISettings, settings?: ISettings) => ISettings;

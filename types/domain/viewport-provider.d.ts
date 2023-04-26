import { Vector2 } from 'mz-math';
import { ISettings } from '../interfaces';
export declare const SM_BREAK_POINT = 640;
export declare const MD_BREAK_POINT = 768;
export declare const LG_BREAK_POINT = 1024;
export declare const XL_BREAK_POINT = 1280;
export declare const getViewPortSize: () => Vector2;
export declare const getConnectionSizePerViewport: (options: ISettings, placeholderWidth: number) => number;

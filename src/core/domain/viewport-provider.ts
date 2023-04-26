import { Vector2 } from 'mz-math';
import { ISettings } from '../interfaces';

// breakpoints for device resolutions
export const SM_BREAK_POINT = 640;
export const MD_BREAK_POINT = 768;
export const LG_BREAK_POINT = 1024;
export const XL_BREAK_POINT = 1280;

export const getViewPortSize = () : Vector2 => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    return [vw, vh];
};

export const getConnectionSizePerViewport = (options: ISettings, placeholderWidth: number) : number => {

    const viewport = getViewPortSize();
    const vw = viewport[0];

    if(options.smConnectionSize !== undefined && vw <= SM_BREAK_POINT){
        return options.smConnectionSize * placeholderWidth;
    }

    if(options.mdConnectionSize !== undefined && vw <= MD_BREAK_POINT){
        return options.mdConnectionSize * placeholderWidth;
    }

    if(options.lgConnectionSize !== undefined && vw <= LG_BREAK_POINT){
        return options.lgConnectionSize * placeholderWidth;
    }

    // --- XL ----
    return options.connectionSize as number * placeholderWidth;
};

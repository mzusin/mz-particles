import { Vector2 } from 'mz-math';

export const MOBILE_BREAK_POINT = 640;
export const TABLET_BREAK_POINT = 768;

export const getViewPortSize = () : Vector2 => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    return [vw, vh];
};


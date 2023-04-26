## Settings

The **ISettings** interface defines the particles configuration options. These options include the canvas color, particle number, speed and size, connection settings, and more.

```ts
export interface ISettings {

    $placeholder?: HTMLElement;

    // canvas settings -------------------
    canvasColor?: string;

    // particles props -------------------
    particlesNumber: number; // xl <= 1280
    lgParticlesNumber?: number, // <= 1024
    mdParticlesNumber?: number, // <= 768
    smParticlesNumber?: number, // <= 640
    resizeDebounceTime?: number;

    particlesColors?: string[];
    minSize?: number;
    maxSize?: number;

    // speed ------------------------------
    minSpeed?: number;
    maxSpeed?: number;

    // connection lines -------------------
    connected?: boolean;
    connectionColor?: string;
    connectionSize?: number; // xl <= 1280
    lgConnectionSize?: number; // <= 1024
    mdConnectionSize?: number; // <= 768
    smConnectionSize?: number; // <= 640

    // SVG shapes -------------------------
    svgPathData?: string[];

    // rotation effect ---------------
    rotate?: boolean;

    // scale effect ------------------
    scaleInOut?: boolean;
    maxScale?: number;
    minScale?: number;
    scaleStep?: number;

    // fade effect -------------------
    fadeInOut?: boolean;
    opacityStep?: number;
}
```

## Example Usage

```html
<script src="mz-particles.min.js"></script>
<script>
    window.particles({
        $placeholder: document.getElementById('placeholder'),
        canvasColor: 'rgb(17, 24, 39)',

        // particles number ---------------
        particlesNumber: 70,
        lgParticlesNumber: 60,
        mdParticlesNumber: 50,
        smParticlesNumber: 30,
        resizeDebounceTime: 1000,
        
        particlesColors: [
            '#CEA262', '#f3a73a', '#fffc00', '#92ccfa',
            '#5daed2', '#366d8c'
        ],
        
        minSpeed: -2,
        maxSpeed: 2,
        minSize: 10,
        maxSize: 30,

        // connection lines ------------
        connected: true,
        connectionColor: 'rgb(70,126,150)',
        connectionSize: 0.09,
        lgConnectionSize: 0.15,
        mdConnectionSize: 0.2,
        smConnectionSize: 0.2,

        svgPathData: 'm14.5 21.75-8.52289 4.48075 1.62773-9.49038-6.89516-6.72112 9.52888-1.38462L14.5 0l4.26144 8.63463 9.52888 1.38462-6.89516 6.72112 1.62773 9.49038z',
        rotate: true
    });
</script>
```
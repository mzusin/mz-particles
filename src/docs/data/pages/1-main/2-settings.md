## Settings

The **ISettings** interface defines the particles configuration options. These options include the canvas size and color, particle number, speed and size, connection settings, and more.

```ts
export interface ISettings {
    // canvas settings -------------------
    canvasWidth?: number|string;
    canvasHeight?: number|string;
    canvasColor?: string;

    // particles props ------------------
    particlesNumber: number,
    particlesColors?: string[],
    minSize?: number;
    maxSize?: number;

    // particles speed ------------------
    minSpeed?: number;
    maxSpeed?: number;

    // connection lines -------------------
    connected?: boolean;
    maxConnectionSize?: number;
    connectionColor?: [number, number, number]; // [r, g, b]

    svgPathData?: string[];
    rotate?: boolean;
}
```

## Properties

- **particlesNumber: number** - The number of particles to be created in the system. If this property is required.

- **particlesColors?: string[]** - An array of strings representing the possible colors for the particles. The colors can be specified in any valid CSS color format (e.g. "#FFFFFF", "rgb(255, 0, 0)", "hsl(120, 100%, 50%)"). If this property is not specified or if the array is empty, the particles will be given random colors.

- **canvasWidth?: number|string** - The width of the canvas on which the particles will be drawn. This can be specified as a number (in pixels) or as a string with a unit of measurement (e.g. "100%", "500px"). If this property is not specified, the default value of **600px** will be used.

- **canvasHeight?: number|string** - The height of the canvas on which the particles will be drawn. This can be specified as a number (in pixels) or as a string with a unit of measurement (e.g. "100%", "500px"). If this property is not specified, the default value of **600px** will be used.

- **canvasColor?: string** - The background color of the canvas. This should be specified as a string in CSS format (e.g. "#FFFFFF" for white, "#000000" for black). If this property is optional.

- **minSpeed?: number** - The minimum speed that particles can travel at. This value should be specified in pixels per frame. If this property is not specified, the default value of **0.5** will be used.

- **maxSpeed?: number** - The maximum speed that particles can travel at. This value should be specified in pixels per frame. If this property is not specified, the default value of **2** will be used.

- **minSize?: number** - The minimum size of particles. This value should be specified in pixels. If this property is not specified, the default value of **5** will be used.

- **maxSize?: number** - The maximum size of particles. This value should be specified in pixels. If this property is not specified, the default value of **10** will be used.

- **connected?: boolean;** - If true, particles will be connected by lines. The default value is **true**.

- **maxConnectionSize?: number** - The maximum distance at which particles will be connected by lines. This value should be specified in pixels. If this property is not specified, the default value of **150px** will be used.

- **connectionColor?: [number, number, number]** - The color of the connections between particles. This should be specified as an array of three numbers representing the red, green, and blue components of the color (e.g. [255, 0, 0] for red). If this property is not specified, the default value of **[45, 56, 91]** will be used.

- **svgPathData?: string**[] - An optional array of strings representing the path data for the SVG shape that will be used to generate the particles. The svgPathData is a sequence of commands and coordinates that describe the shape of the SVG path. If this property is not specified, the circle shape will be used.

- **rotate?: boolean** - A boolean value indicating whether the particles should rotate as they move. If this property is optional.

## Example Usage

```html
<script src="mz-particles.min.js"></script>
<script>
    const $canvas = window.particles({
        canvasWidth: 600,
        canvasHeight: 600,
        canvasColor: 'rgb(17, 24, 39)',
        
        particlesNumber: 40,
        particlesColors: [
            '#CEA262', '#f3a73a', '#fffc00', '#92ccfa',
            '#5daed2', '#366d8c'
        ],
        
        minSpeed: 0.5,
        maxSpeed: 2,
        minSize: 10,
        maxSize: 30,
        
        maxConnectionSize: 150,
        connectionColor: [45, 56, 91],

        svgPathData: 'm14.5 21.75-8.52289 4.48075 1.62773-9.49038-6.89516-6.72112 9.52888-1.38462L14.5 0l4.26144 8.63463 9.52888 1.38462-6.89516 6.72112 1.62773 9.49038z',
        rotate: true
    });

    document.body.append($canvas);
</script>
```
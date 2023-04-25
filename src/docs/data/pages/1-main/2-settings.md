## Settings

The **ISettings** interface defines the particles configuration options. These options include the canvas size and color, particle number, speed and size, connection settings, and more.

```ts
export interface ISettings {
    canvasWidth?: number|string;
    canvasHeight?: number|string;
    canvasColor?: string;

    particlesNumber: number,

    minSpeed?: number;
    maxSpeed?: number;

    minSize?: number;
    maxSize?: number;

    maxConnectionSize?: number;
    connectionColor?: [number, number, number]; // [r, g, b]

    svgPath?: string;
    rotate?: boolean;
}
```

## Properties

- **particlesNumber: number** - The number of particles to be created in the system. If this property is required.

- **canvasWidth?: number|string** - The width of the canvas on which the particles will be drawn. This can be specified as a number (in pixels) or as a string with a unit of measurement (e.g. "100%", "500px"). If this property is not specified, the default value of **600px** will be used.

- **canvasHeight?: number|string** - The height of the canvas on which the particles will be drawn. This can be specified as a number (in pixels) or as a string with a unit of measurement (e.g. "100%", "500px"). If this property is not specified, the default value of **600px** will be used.

- **canvasColor?: string** - The background color of the canvas. This should be specified as a string in CSS format (e.g. "#FFFFFF" for white, "#000000" for black). If this property is optional.

- **minSpeed?: number** - The minimum speed that particles can travel at. This value should be specified in pixels per frame. If this property is not specified, the default value of **0.5** will be used.

- **maxSpeed?: number** - The maximum speed that particles can travel at. This value should be specified in pixels per frame. If this property is not specified, the default value of **2** will be used.

- **minSize?: number** - The minimum size of particles. This value should be specified in pixels. If this property is not specified, the default value of **5** will be used.

- **maxSize?: number** - The maximum size of particles. This value should be specified in pixels. If this property is not specified, the default value of **10** will be used.

- **maxConnectionSize?: number** - The maximum distance at which particles will be connected by lines. This value should be specified in pixels. If this property is not specified, the default value of **150px** will be used.

- **connectionColor?: [number, number, number]** - The color of the connections between particles. This should be specified as an array of three numbers representing the red, green, and blue components of the color (e.g. [255, 0, 0] for red). If this property is not specified, the default value of **[45, 56, 91]** will be used.

- **svgPath?: string** - An optional SVG path (path data only) that will be used to draw the particles instead of the default circle shape.

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
        minSpeed: 0.5,
        maxSpeed: 2,
        minSize: 5,
        maxSize: 10,
        maxConnectionSize: 150,
        connectionColor: [45, 56, 91],
        svgPath: 'm14.5 21.75-8.52289 4.48075 1.62773-9.49038-6.89516-6.72112 9.52888-1.38462L14.5 0l4.26144 8.63463 9.52888 1.38462-6.89516 6.72112 1.62773 9.49038z',
        rotate: true
    });

    document.body.append($canvas);
</script>
```
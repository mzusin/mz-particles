# Particles Settings

- **particlesNumber: number** - The number of particles to be created in the system. If this property is required.

- **particlesColors?: string[]** - An array of strings representing the possible colors for the particles. The colors can be specified in any valid CSS color format (e.g. "#FFFFFF", "rgb(255, 0, 0)", "hsl(120, 100%, 50%)"). If this property is not specified or if the array is empty, the particles will be given random colors.

- **svgPathData?: string**[] - An optional array of strings representing the path data for the SVG shape that will be used to generate the particles. The svgPathData is a sequence of commands and coordinates that describe the shape of the SVG path. If this property is not specified, the circle shape will be used.

- **minSpeed?: number** - The minimum speed that particles can travel at. This value should be specified in pixels per frame. If this property is not specified, the default value of **-2** will be used.

- **maxSpeed?: number** - The maximum speed that particles can travel at. This value should be specified in pixels per frame. If this property is not specified, the default value of **2** will be used.

- **minSize?: number** - The minimum size of particles. This value should be specified in pixels. If this property is not specified, the default value of **5** will be used.

- **maxSize?: number** - The maximum size of particles. This value should be specified in pixels. If this property is not specified, the default value of **10** will be used.



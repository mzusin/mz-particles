# Stars

This example creates a particle effect with rotated triangles.

```ts
const $canvas = particles({
  canvasWidth: '100vw',
  canvasHeight: '100vh',
  canvasColor: 'rgb(17, 24, 39)',
  particlesNumber: 100,

  minSize: 10,
  maxSize: 30,

  particlesColors: [
      '#c20cff', '#ff0000', '#ff00ef', '#eaeaea',
      '#8e3da4', '#d387d2'
  ],

  // star -------------
  rotate: true,
  svgPathData: [
      'M9.5 0 19 19H0z',
      //'M18.5 0 37 18H0z',
      //'m9 0 9 25H0z',
      //'m0 0 32 25H0z',
  ],
});

document.body.append($canvas);
```
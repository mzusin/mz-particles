# Circles

This example creates a circle particle effect, which is the library's default effect.

```ts
const $canvas = particles({
  canvasWidth: '100vw',
  canvasHeight: '100vh',
  canvasColor: 'rgb(17, 24, 39)',
    
  particlesNumber: 100,
  minSize: 5,
  maxSize: 10,
});

document.body.append($canvas);
```
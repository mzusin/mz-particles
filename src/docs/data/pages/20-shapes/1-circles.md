# Circles

This example creates a circle particle effect, which is the library's default effect.

```ts
particles({
  $placeholder: document.getElementById('placeholder'),
  canvasColor: 'rgb(17, 24, 39)',
    
  particlesNumber: 100,
  minSize: 5,
  maxSize: 10,
});
```
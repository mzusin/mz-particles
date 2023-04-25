# Fade In/Out Effect

- **fadeInOut?: boolean** - A boolean value indicating whether or not the particles should have a fade in/out effect. If this property is set to true, the particles will fade in and out as they move around. This property is optional.

- **opacityStep?: number** - A number representing the step size for changing the opacity of the particles. If the fadeInOut property is set to true, this property determines the increment or decrement in the opacity value for each frame of animation. If this property is not specified, a default value of **0.01** will be used.

## Usage Example

```ts
const $canvas = window.particles({
    
  // fade effect -------------
  fadeInOut: true,
  opacityStep: 0.001,

  // canvas settings ---------  
  canvasWidth: '100vw',
  canvasHeight: '100vh',
  canvasColor: 'rgb(17, 24, 39)',
  particlesNumber: 100,

  minSize: 10,
  maxSize: 30,

  particlesColors: [
      '#CEA262', '#f3a73a', '#fffc00', '#92ccfa',
      '#5daed2', '#366d8c'
  ],

  // stars -------------
  svgPathData: [
      'm14.5 21.75-8.52289 4.48075 1.62773-9.49038-6.89516-6.72112 9.52888-1.38462L14.5 0l4.26144 8.63463 9.52888 1.38462-6.89516 6.72112 1.62773 9.49038z',
      'M14.5 21.75 4.24695 24.75305 7.25 14.5 4.24695 4.24695 14.5 7.25l10.25305-3.00305L21.75 14.5l3.00305 10.25305z',
      'm14.5 21.75-5.54891 6.14625.42239-8.26973-8.26973.42239L7.25 14.5 1.10375 8.95109l8.26973.42239-.42239-8.26973L14.5 7.25l5.54891-6.14625-.42239 8.26973 8.26973-.42239L21.75 14.5l6.14625 5.54891-8.26973-.42239.42239 8.26973z',
  ],
});

document.body.append($canvas);
```
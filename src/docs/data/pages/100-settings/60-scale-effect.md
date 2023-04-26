# Scale Effect

- **scaleInOut?: boolean** - A boolean value indicating whether or not the particles should have a scaling effect. If this property is set to true, the particles will grow and shrink as they move around. 

- **maxScale?: number** - A number representing the maximum scaling factor for the particles. If the scaleInOut property is set to true, this property determines the maximum size that the particles can reach. The scaling factor is multiplied with the original size of the particle. If this property is not specified, a default value of **2** will be used.

- **minScale?: number** - A number representing the minimum scaling factor for the particles. If the scaleInOut property is set to true, this property determines the minimum size that the particles can shrink to. The scaling factor is multiplied with the original size of the particle. If this property is not specified, a default value of **0.5** will be used.

- **scaleStep?: number** - A number representing the step size for scaling the particles. If the scaleInOut property is set to true, this property determines the increment or decrement in the scaling factor for each frame of animation. If this property is not specified, a default value of **0.01** will be used.

## Usage Example

```ts
window.particles({

  // scale effect -----------
  scaleInOut: true,
  maxScale: 1.5,
  minScale: 0.7,
  scaleStep: 0.005,

  // canvas settings ---------    
  $placeholder: document.getElementById('placeholder'),
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
```
## Basic Usage

To use the library, you need to install the module using npm:

```cmd
npm install mz-particles
```

Or using Yarn:

```cmd
yarn add mz-particles
```

Then you can import any function as follows:

```js
import { particles } from 'mz-particles';

particles({
    canvasWidth: '600px',
    canvasHeight: '300px',
    particlesNumber: 100,
});
```

You can also use it without bundlers. Download the latest [mz-particles.min.js](https://github.com/mzusin/mz-particles/blob/main/dist/mz-particles.min.js) script from GitHub and add it to the page as follows:

```html
<script src="mz-particles.min.js"></script>
<script>
    window.particles({
        canvasWidth: '100vw',
        canvasHeight: '100vh',
        particlesNumber: 100,
    });
</script>
```
  

# Connecting Lines

- **connected?: boolean;** - If true, particles will be connected by lines. The default value is **true**.

- **connectionColor?: string** - The color of the connections between particles. If this property is not specified, the default value of **rgb(70,126,150)** will be used.

## Connection Size

- **connectionSize?: number** - The maximum distance at which particles will be connected by lines. If connectionSize = 1, all lines will be connected. If this property is not specified, the default value of **0.09** will be used. 

- **lgConnectionSize?: number** - The same as connectionSize, but for viewport <= 1024 px. The default value is 0.15.

- **mdConnectionSize?: number** - The same as connectionSize, but for viewport <= 768 px. The default value is 0.2.

- **smConnectionSize?: number** - The same as connectionSize, but for viewport <= 640 px. The default value is 0.2.

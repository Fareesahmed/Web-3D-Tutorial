# Web 3D Tutorial

_Blender to Web3D as fast as possible_

![Preview](/public/preview.gif)

This repo is meant to accompany a tutorial series on Youtube that starts here: https://youtu.be/1BvLpt7egss

As the course advances I'll add scripts here to make some tasks easier and grow this to be a Blender to Web toolkit.

Discuss here on Discord: https://discord.gg/5rTCdzpKnj

### Requirements:

- [Node.js](https://nodejs.org/en/download/)
- [VS Code](https://code.visualstudio.com/download) , to follow along with the tutorial
- [Blender](https://www.blender.org/download/) , We are focusing on Blender to Web
### Resources:

- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/): Three.js Renderer
- [Drei](https://github.com/pmndrs/drei): React Three Fiber Helpers
- [Three.js](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene): 3D Engine
- [Vite](https://vitejs.dev/guide/): Static Web Server
- [CodeSandbox](https://codesandbox.io/docs/configuration): Online Prototyping Container (optional)

### Installation

```
npm install
```

### Getting Started

1. Open a model in Blender you want to publish (places like [CG Trader](https://www.cgtrader.com/) are a good start)
2. Export to `public/model.glb`
3. open a terminal to `/src` directory
4. run `npx gltfjsx ../public/model.glb`
5. rename the new `Model.js` to `Model.jsx`
6. run `npm run dev` from terminal
7. look at what you did, tune and repeat
### Scripts

```
npm run dev
npm run build
npm run preview
npm run sandbox
```
### CodeSandbox
To create a sandbox from this starter, [import your repository URL](https://codesandbox.io/dashboard/repositories) (this repo works too), or [fork this template](https://codesandbox.io/s/react-three-fiber-vite-starter-r1tgld).

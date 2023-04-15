import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sky, Cloud, Bvh, OrbitControls, Environment, Lightformer } from "@react-three/drei";
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Model } from "./Model.jsx";

const Scene = () => {
  return (
    <>
      <Suspense fallback={null}>
            <Model />
      </Suspense>
      {/* REPLACE THIS LIGHT AS NEEDED IT'S A GOOD START */}
      <ambientLight intensity={1000}/>
    </>
  );
};

const App = () => {
  return (
    <Canvas shadows gl={{ physicallyCorrectLights: true, toneMappingExposure:.02 }}>
      {/* REMOVE ORBIT CONTROLS TO FORCE THE CAMERA VIEW */}
      <Environment
        files={['/box/px.png', '/box/nx.png', '/box/py.png', '/box/ny.png', '/box/pz.png', '/box/nz.png']}
        background={true}
      />

      <OrbitControls />
          <Scene>
          </Scene>
    </Canvas>
  );
};

export default App;

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sky, Cloud, Bvh, OrbitControls, Environment, Lightformer } from "@react-three/drei";
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Model, Instances} from "./Model.jsx";

const Scene = () => {
  return (
    <>
      <Suspense fallback={null}>
          <Instances>
            <Model />
          </Instances>
          <EffectComposer multisampling={8}>
            <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={1} />
          </EffectComposer>
      </Suspense>
      {/* REPLACE THIS LIGHT AS NEEDED IT'S A GOOD START */}
      <ambientLight intensity={3}/>
    </>
  );
};

const App = () => {
  return (
    <Canvas shadows gl={{ physicallyCorrectLights: true, toneMappingExposure:.02 }}>
      {/* REMOVE ORBIT CONTROLS TO FORCE THE CAMERA VIEW */}
      <OrbitControls />
        <Environment preset={'dawn'} background={true} />
       
          <Scene>
            
          </Scene>
           
    </Canvas>
  );
};

export default App;

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Model, Instances} from "./Model.jsx";

const Scene = () => {
  return (
    <>
      <Suspense fallback={null}>
          <Instances>
            <Model />
          </Instances>
          <Environment preset={'sunset'} background={true} />
      </Suspense>
      {/* REPLACE THIS LIGHT AS NEEDED IT'S A GOOD START */}
      <ambientLight intensity={1}/>
    </>
  );
};

const App = () => {
  return (
    <Canvas shadows gl={{ physicallyCorrectLights: true, toneMappingExposure:.1 }}>
      {/* REMOVE ORBIT CONTROLS TO FORCE THE CAMERA VIEW */}
      <OrbitControls />
      <Scene>
        
      </Scene>
    </Canvas>
  );
};

export default App;

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Model from "./Model.jsx";

const Scene = () => {
  const boxRef = useRef();
  useFrame((state, delta) => {
   // boxRef.current.rotation.y += 0.02;
  });

  return (
    <>
      <Suspense fallback={null}>
          <Model />
      </Suspense>
      {/* REPLACE THIS LIGHT AS NEEDED IT'S A GOOD START */}
      <ambientLight />
    </>
  );
};

const App = () => {
  return (
    <Canvas>
      {/* REMOVE ORBIT CONTROLS TO FORCE THE CAMERA VIEW */}
      <OrbitControls />
      <Scene>
        
      </Scene>
    </Canvas>
  );
};

export default App;

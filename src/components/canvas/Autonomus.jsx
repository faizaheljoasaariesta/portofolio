/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Autonomus = ({ isMobile }) => {
  const autonomus = useGLTF("./autonomus/scene.gltf");

  return (
    <mesh>
      <hemisphereLight 
        intensity={0.15}
        groundColor="black"
      />
      <pointLight intensity={1} />
      <primitive 
        object={autonomus.scene}
        scale={30}
        position={isMobile ? [0, -2, 0] : [0, -5, 0]}
      />
    </mesh>
  );
};

const AutonomusCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  }, [])



  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Autonomus isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default AutonomusCanvas;
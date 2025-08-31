"use client";

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "../../public/Scene";
import {
  Bounds,
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Text,
} from "@react-three/drei";
import ErrorBoundary from "../lib/ErrorBoundary";
import PlaneImg from "../assets/plane-img-3d.png";

const Plane3D = () => {
  const [lost, setLost] = useState(false);

  if (lost) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={PlaneImg}
          alt="Fallback Plane"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <ErrorBoundary
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-transparent">
            <img
              src={PlaneImg}
              alt="Fallback Plane"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        }
      >
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          onCreated={({ gl }) => {
            const canvas = gl.domElement;

            const handleLost = (e) => {
              e.preventDefault();
              console.warn("⚠️ WebGL context lost");
              setLost(true); // ✅ triggers fallback
            };

            const handleRestored = () => {
              console.log("✅ WebGL context restored");
              setLost(false); // ✅ restore Canvas
            };

            canvas.addEventListener("webglcontextlost", handleLost);
            canvas.addEventListener("webglcontextrestored", handleRestored);
          }}
        >
          <ambientLight intensity={0.5} />
          <OrbitControls enableZoom={false} enablePan={false} />
          <PerspectiveCamera makeDefault position={[5, 3, 7]} fov={45} />

          <Suspense
            fallback={
              <mesh>
                <Text
                  fontSize={0.5}
                  color="white"
                  anchorX="center"
                  anchorY="middle"
                >
                  Loading 3D Model...
                </Text>
              </mesh>
            }
          >
            <Bounds fit clip observe margin={1}>
              <Model />
            </Bounds>
          </Suspense>

          <Environment preset="sunset" />
          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.5}
            scale={10}
            blur={3}
            far={10}
          />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default Plane3D;

export const Plane = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img
        src={PlaneImg}
        alt="Fallback Plane"
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
}
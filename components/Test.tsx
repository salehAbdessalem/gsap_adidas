"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
const Test = () => {
  return (
    <Canvas style={{ position: "fixed" }}>
      <Environment preset="studio" />
      <OrbitControls />
      <mesh position={[-1, 0, 0]}>
        {/* geometry */}
        <boxGeometry />
        {/* material */}
        <meshStandardMaterial color="orange" />
      </mesh>

      {/* <mesh position={[1, 0, 0]} scale={2}>
        <boxGeometry />
        <meshBasicMaterial color="orange" />
      </mesh> */}
      <Cube />
    </Canvas>
  );
};

export default Test;

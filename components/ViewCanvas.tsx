"use client"
import { Canvas } from "@react-three/fiber";
import { MainStudioModel } from "./MainStudioModal";
import { OrbitControls } from "@react-three/drei";
import Rig from "./Rig";

const ViewCanvas = () => {
  return (
    <Canvas style={{ position: "fixed", inset: 0, overflow: "hidden" }} camera={{position: [0, 0.7, 3], fov: 30}}>
      <MainStudioModel />
      {/* <OrbitControls /> */}
      <Rig />
    </Canvas>
  );
};

export default ViewCanvas;

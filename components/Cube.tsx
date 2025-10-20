import * as THREE from "three";

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

type GLTFResult = {
  nodes: {
    [name: string]: THREE.Mesh;
  };
};

export default function Cube() {
  const { nodes } = useGLTF("/test/cube.glb") as unknown as GLTFResult;
  const texture = useTexture("/test/baked-texture.png");
  texture.flipY = false
  texture.colorSpace = THREE.SRGBColorSpace
  return (
    <group dispose={null}>
      <mesh position={[1, 0, 0]} geometry={nodes.Cube.geometry}>
        <meshBasicMaterial
          // color="orange"
          map={texture}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/test/cube.glb");

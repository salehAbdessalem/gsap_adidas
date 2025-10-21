import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useMainStudioTextures } from "@/lib/useTextures";
import { createMaterials } from "@/lib/material";
import { studioTextures } from "@/lib/textures";

type GLTFResult = {
  nodes: {
    [name: string]: THREE.Mesh;
  };
};

export function MainStudioModel() {
  const { nodes } = useGLTF(
    "/models/main/MainStudio.glb"
  ) as unknown as GLTFResult;

  const textures = useMainStudioTextures();
  const mats = createMaterials(textures) as Record<
    keyof typeof studioTextures.main,
    THREE.MeshBasicMaterial
  >;

  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Environment.geometry}
        material={mats.defaultStudio}
      />
      <mesh
        geometry={nodes.Shirt_White.geometry}
        position={[0.65, 0.7, -0.45]}
        rotation={[0, Math.PI / 9, 0]}
        material={mats.whiteShirt}
      />
      <mesh
        geometry={nodes.Shirt_Sport.geometry}
        position={[0, 0.7, 0]}
        material={mats.sportShirt}
      />
      <mesh
        geometry={nodes.Shirt_Gray.geometry}
        position={[-0.65, 0.7, -0.45]}
        rotation={[0, -Math.PI / 9, 0]}
        material={mats.grayShirt}
      />
      <mesh
        geometry={nodes.Hitbox.geometry}
        scale={[2.52, 1, 1]}
        visible={false}
      />
    </group>
  );
}

useGLTF.preload("/models/main/MainStudio.glb");

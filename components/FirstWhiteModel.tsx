import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

import { useShirtSectionTextures } from "@/lib/useTextures";
import { createMaterials } from "@/lib/material";
import { TextureKey } from "@/lib/textures";

type GLTFResult = {
  nodes: {
    [name: string]: THREE.Mesh;
  };
};
export function FirstWhiteModel() {
  const { nodes } = useGLTF(
    "/models/white/WhiteStudio.glb"
  ) as unknown as GLTFResult;
  const textures = useShirtSectionTextures("white", "first");
  const mats = createMaterials(textures) as Record<
    TextureKey<"white", "first">,
    THREE.MeshBasicMaterial
  >;
  return (
    <group dispose={null}>
      <mesh geometry={nodes.DJ_Table.geometry} material={mats.dj}/>
      <mesh geometry={nodes.Speakers.geometry} material={mats.speakers}/>
      <mesh geometry={nodes.LED_Cube_White.geometry} material={mats.studio}/>
      <mesh
        geometry={nodes.Shirt_White.geometry}
        material={mats.shirt}
        position={[0, 0.7, 0]}
      />
      <mesh geometry={nodes.Wall.geometry} material={mats.studio} />
      <mesh geometry={nodes.Floor.geometry} material={mats.studio}/>
      <mesh
        
        geometry={nodes.TV.geometry}
        material={mats.studio}
      />
      <mesh
        geometry={nodes.TV_Screen.geometry}
        material={mats.tv}
      />
    </group>
  );
}

useGLTF.preload("/models/white/WhiteStudio.glb");

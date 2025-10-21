import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { studioTextures } from "./textures";

export const useMainStudioTextures = () => {
  const textures = useTexture(studioTextures.main);
  Object.values(textures).forEach((tex) => {
    tex.flipY = false;
    tex.colorSpace = THREE.SRGBColorSpace;
  });

  return textures;
};

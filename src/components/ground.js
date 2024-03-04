import {useLoader} from "@react-three/fiber";
import React from "react";
import {TextureLoader} from "three";

const Ground = () => {
  const [roughness, normal] = useLoader(TextureLoader, [
    process.env.PUBLIC_URL + "texture/terrain-normal.jpg",
    process.env.PUBLIC_URL + "texture/terrain-rough.jpg",
  ]);
  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
      <planeGeometry args={[30, 30]} />
      <meshReflectorMaterial
        envMapIntensity={0}
        dithering={true}
        color={[0.015, 0.015, 0.015]}
        roughness={0.7}
        blur={[1000, 400]}
        mixBlur={30}
        mixStrength={80}
        mixContrast={1}
        resolution={1024}
        mirror={0}
        depthScale={0.01}
        minDepthThreshold={0.9}
        maxDepthThreshold={1}
        depthToBlurRatioBias={0.25}
        debug={0}
        reflectorOffset={0.2}
      />
    </mesh>
  );
};

export default Ground;

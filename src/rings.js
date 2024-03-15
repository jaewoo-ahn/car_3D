import {useRef} from "react";

export function Rings() {
  const itemRef = useRef([]);
  const itemArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <>
      {itemArray.map((res, idx) => {
        return (
          <mesh
            castShadow
            receiveShadow
            position={[0, 0, 0]}
            key={idx}
            ref={(el) => (itemRef.current[idx] = el)}
          >
            <torusGeometry args={[3.35, 0.05, 16, 100]} />
            <meshStandardMaterial
              emissive={[0.5, 0.5, 0.5]}
              color={[0, 0, 0]}
            />
          </mesh>
        );
      })}
    </>
  );
}

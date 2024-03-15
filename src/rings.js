import {useRef} from "react";

export function Rings() {
  const itemRef = useRef([]);
  const itemArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <>
      {itemArray.map((res, idx) => {
        return <mesh></mesh>;
      })}
    </>
  );
}

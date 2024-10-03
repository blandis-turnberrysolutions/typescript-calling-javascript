import { Component3 } from "./Component3.tsx";
import { Component2 } from "./Component2.jsx";

interface Component1Props {
  onClick: (a: number) => void;
}

export function Component1({ onClick }: Component1Props) {
  return (
    <>
      <Component2 onClick={onClick} />
      <Component3 onClick={onClick} />
    </>
  );
}

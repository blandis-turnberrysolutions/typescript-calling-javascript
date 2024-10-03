import { Component1 } from "./Component1.tsx";

export function Component0() {
  return (
    <>
      <Component1
        onClick={(a) => {
          alert(a + 1);
        }}
      />
    </>
  );
}

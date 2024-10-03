interface Component3Props {
  onClick: (a: number) => void;
}

export function Component3({ onClick }: Component3Props) {
  return (
    <button
      onClick={() => {
        onClick(1);
      }}
    >
      Test Typescript
    </button>
  );
}

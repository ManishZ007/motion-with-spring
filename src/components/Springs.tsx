import { a, useSprings } from "@react-spring/three";

const items = [
  {
    initialPosition: [-3.5, 0, 0],
    finalPosition: [-1.5, 0, 0],
  },
  {
    initialPosition: [0, 3.5, 0],
    finalPosition: [0, 0, 0],
  },
  {
    initialPosition: [3.5, 0, 0],
    finalPosition: [1.5, 0, 0],
  },
];

const Spring = () => {
  const springs = useSprings(
    items.length,
    items.map((item) => ({
      from: { position: item.initialPosition },
      to: { position: item.finalPosition },
    })),
  );

  return (
    <>
      {springs.map((item, i) => (
        <a.mesh key={Math.random()} scale={0.5} position={item.position}>
          <boxGeometry />
          <a.meshBasicMaterial color={"orange"} />
        </a.mesh>
      ))}
    </>
  );
};

export default Spring;

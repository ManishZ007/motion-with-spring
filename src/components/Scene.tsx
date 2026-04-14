import { OrbitControls } from "@react-three/drei";
import Simple from "./SimpleStart";

const Scene = () => {
  return (
    <>
      <OrbitControls />

      <Simple />
    </>
  );
};

export default Scene;

// react-spring is used to create smooth, natural, and interactive animations
// in web and UI development. It uses physics-based motion instead of fixed
// durations, making animations feel more realistic and responsive. It helps
// improve user experience by adding fluid transitions, gestures, and dynamic
// visual effects to applications.

// now we starting from one Simple example
// go to the components -> SimpleStart.tsx
// that you understand the some imp basics

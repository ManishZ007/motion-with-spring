import { OrbitControls } from "@react-three/drei";
import Props from "./Props";

const Scene = () => {
  return (
    <>
      <OrbitControls />

      {/* <Simple /> */}
      {/* <ImperativeAPIExample /> */}
      <Props />
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

// now we learn what is the use of ImperativeAPI and how it's work
// goto the components -> ImperativeAPI.tsx

// next we go to the props what are the imp props
// with that we doing better animation in our application
// goto to components -> Props.tsx

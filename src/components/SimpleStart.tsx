import { a, useSpring } from "@react-spring/three";
import { useState } from "react";

const Simple = () => {
  const [click, setClick] = useState<boolean | null>(null);
  const { scale, color } = useSpring({
    from: {
      scale: click ? 1 : 2,
      color: click ? "orange" : "hotpink",
    },

    scale: click ? 2 : 1,
    color: click ? "hotpink" : "orange",
  });

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <a.mesh onClick={handleClick} scale={scale}>
        <boxGeometry />
        <a.meshBasicMaterial color={color} />
      </a.mesh>
    </>
  );
};

export default Simple;

// now we are starting with a simple example using react-spring in React Three Fiber 🎯

// first we import `a` and `useSpring` from "@react-spring/three"
// `a` is used to make animated versions of three.js components
// like: a.mesh, a.meshBasicMaterial (they can handle animation values)

// `useSpring` is a hook that creates smooth animated values (like scale, color)

// here we create a state `click`
// this will help us toggle between two animation states (clicked / not clicked)
// NOTE: using boolean | null works, but better to just use `false` for simplicity

// now comes the main part → useSpring 👇
// const { scale, color } = useSpring({

//   // `from` means animation will START from these values
//   // here we are setting opposite values based on click
//   from: {
//     scale: click ? 1 : 2,
//     color: click ? "orange" : "hotpink",
//   },

//   // these are the TARGET values (where animation will go)
//   scale: click ? 2 : 1,
//   color: click ? "hotpink" : "orange",
// })

// IMPORTANT 💡
// we did NOT use `to` here because react-spring allows shorthand
// writing directly like this is same as:
// to: { scale: ..., color: ... }
// so `to` is optional for simple animations

// you only need `to` when doing complex things like:
// sequences, async animations, chaining, etc.

// now one very important thing ⚠️
// `scale` and `color` are NOT normal values
// they are "SpringValue" (animated values)

// so we MUST use animated components like:
// a.mesh instead of mesh
// a.meshBasicMaterial instead of meshBasicMaterial

// if we use normal component → it will give error ❌

// now in JSX 👇

{
  /* <a.mesh onClick={handleClick} scale={scale}>
  // a.mesh allows animated scale

  <boxGeometry />
  // simple cube shape

  <a.meshBasicMaterial color={color} />
  // animated color (this works because we used `a.`)
</a.mesh> */
}

// when we click:
// 1. click state changes
// 2. useSpring detects change
// 3. animation runs automatically ✨

// overall idea 🚀
// react-spring helps us create smooth, natural animations
// without manually controlling frames or timing

// just change values → animation happens automatically 🔥

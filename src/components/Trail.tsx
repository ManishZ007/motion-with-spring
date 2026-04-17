import { a, useSprings, useTrail } from "@react-spring/three";
import { Text } from "@react-three/drei";

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

const Trail = () => {
  const [trail, api] = useTrail(3, () => ({
    from: {
      scale: 0,
    },
  }));

  let active = true;
  const missedHandler = () => {
    if (active) {
      active = false;
      api.start({
        to: {
          scale: 0.6,
        },
      });
    } else {
      active = true;
      api.start({
        to: {
          scale: 0.0,
        },
      });
    }
  };

  return (
    <>
      <Text position-y={2} fontSize={0.4}>
        Click me
      </Text>
      {trail.map((item, i) => (
        <a.mesh
          key={Math.random()}
          scale={item.scale}
          position-x={-1 + i}
          onPointerMissed={missedHandler}
        >
          <boxGeometry />
          <a.meshBasicMaterial color={"orange"} />
        </a.mesh>
      ))}
    </>
  );
};

export default Trail;

// ─────────────────────────────────────
// 📘 COMPLETE EXPLANATION (END OF FILE)
// ─────────────────────────────────────
//
// 🎯 WHAT THIS COMPONENT DOES:
//
//   → Renders 3 cubes 📦📦📦
//   → Applies a TRAIL animation (one after another) 🎬
//   → Click anywhere (miss event) 🖱️ → toggles scale animation
//   → Cubes grow/shrink in sequence (not all at once)
//
//   → Also displays a text: "Click me"
//
// ─────────────────────────────────────
// 🧠 BIG IDEA (VERY IMPORTANT)
//
//   👉 useTrail = linked animations (chain effect)
//
//   Unlike useSprings:
//     → All animations run independently
//
//   useTrail:
//     → Each item follows the previous one
//     → Creates a smooth delay/chain effect
//
//   💡 Think:
//
//     useSprings = all move together 🧍🧍🧍
//     useTrail   = one follows another 🚶‍♂️🚶‍♂️🚶‍♂️
//
// ─────────────────────────────────────
// ⚙️ useTrail (MAIN LOGIC)
//
//   const [trail, api] = useTrail(3, () => ({
//     from: {
//       scale: 0,
//     },
//   }));
//
//   👉 First parameter: 3
//
//     → Number of items in the trail
//     → Number of animated objects
//
//     💡 You have 3 cubes → so 3
//
//     If you change:
//       3 → 5 → you must render 5 cubes
//
//   👉 Second parameter: function
//
//     → Defines initial animation state
//
//     from: { scale: 0 }
//       → Cubes start invisible (size = 0)
//
//   👉 Returns:
//
//     trail → array of animated values
//     api   → controller (start animation)
//
// ─────────────────────────────────────
// ❗ WHY "3" IS IMPORTANT
//
//   useTrail(3, ...)
//
//   → React-spring creates 3 linked animations
//
//   Internally:
//
//     trail = [
//       { scale: animatedValue },
//       { scale: animatedValue },
//       { scale: animatedValue },
//     ]
//
//   💡 Each item:
//     → waits for previous one
//     → then starts
//
//   RESULT:
//
//     Cube 1 → starts first
//     Cube 2 → follows
//     Cube 3 → follows last
//
//   🎬 That’s the "trail effect"
//
// ─────────────────────────────────────
// 🎮 CONTROL LOGIC (missedHandler)
//
//   let active = true;
//
//   ⚠️ IMPORTANT:
//     This is NOT React state
//     → resets on every render (not ideal in real apps)
//
//   👉 missedHandler():
//
//     if (active)
//       → scale: 0.6 (grow cubes 📈)
//     else
//       → scale: 0.0 (shrink cubes 📉)
//
//   👉 api.start()
//
//     → triggers animation for ALL trail items
//
//   💡 Because it's a trail:
//     → cubes animate one after another
//
// ─────────────────────────────────────
// 🖱️ onPointerMissed
//
//   onPointerMissed={missedHandler}
//
//   → Fires when you click BUT NOT on the mesh
//
//   💡 Meaning:
//
//     Click empty space → trigger animation
//
//   Useful for:
//     → background interactions
//     → reset actions
//
// ─────────────────────────────────────
// 🧱 RENDERING TRAIL ITEMS
//
//   {trail.map((item, i) => (
//
//     <a.mesh
//       scale={item.scale}
//       position-x={-1 + i}
//     />
//
//   ))}
//
//   👉 trail.map()
//     → loops through animated values
//
//   👉 item.scale
//     → animated scale for each cube
//
//   👉 position-x={-1 + i}
//
//     → positions cubes side-by-side:
//
//       i = 0 → x = -1
//       i = 1 → x = 0
//       i = 2 → x = 1
//
//   💡 Simple layout logic
//
//   ⚠️ key={Math.random()} ❌
//
//     → Bad practice
//     → Causes unnecessary re-renders
//
//     ✅ Use:
//       key={i}
//
// ─────────────────────────────────────
// 🎨 TEXT COMPONENT
//
//   <Text position-y={2} fontSize={0.4}>
//     Click me
//   </Text>
//
//   → Displays instruction above cubes
//
//   from @react-three/drei
//
// ─────────────────────────────────────
// 🔄 COMPLETE FLOW
//
//   1. Cubes start with scale = 0 (invisible)
//
//   2. Click empty space 🖱️
//
//   3. Animation starts:
//
//        Cube 1 → grows 📈
//        Cube 2 → grows after delay
//        Cube 3 → grows last
//
//   4. Click again:
//
//        Cubes shrink one by one 📉
//
// ─────────────────────────────────────
// ⚖️ useTrail vs useSprings
//
//   🔹 useSprings
//     → independent animations
//     → all run at same time
//
//   🔹 useTrail
//     → linked animations
//     → delayed chain effect
//
//   💡 Rule:
//
//     Want "together" → useSprings
//     Want "one-by-one" → useTrail
//
// ─────────────────────────────────────
// 🚀 PRO TIPS
//
//   → Use React state instead of `let active` (better control)
//   → Add config for smoother motion ⚙️
//   → Combine scale + position for richer effects 🎯
//   → Use trail for menus, loaders, sequences
//
// ─────────────────────────────────────
// 🔗 PRACTICE TOOL:
//
//   https://react-spring-visualizer.com/
//
//   💡 With the help of this:
//     → You can understand how animation timing works
//     → Experiment with spring physics
//     → Clearly see delay + chaining behavior 🎬
//
// ─────────────────────────────────────

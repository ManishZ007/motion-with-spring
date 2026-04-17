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

// ─────────────────────────────────────
// 📘 COMPLETE EXPLANATION (END OF FILE)
// ─────────────────────────────────────
//
// 🎯 WHAT THIS COMPONENT DOES:
//
//   → Renders MULTIPLE cubes 📦📦📦
//   → Each cube has its own animation
//   → All animations run together using useSprings
//
//   → Cubes move from different starting positions
//     to their target positions smoothly 🎬
//
// ─────────────────────────────────────
// 🧠 BIG IDEA (VERY IMPORTANT)
//
//   👉 useSpring  → ONE animation
//   👉 useSprings → MULTIPLE animations
//
//   💡 Think:
//
//     useSpring   = control 1 object 🎯
//     useSprings  = control many objects 🎯🎯🎯
//
//   Perfect for:
//     → lists
//     → grids
//     → multiple 3D objects
//
// ─────────────────────────────────────
// 📦 DATA STRUCTURE (items)
//
//   const items = [ ... ]
//
//   Each object represents ONE cube
//
//   initialPosition → where cube starts
//   finalPosition   → where cube ends
//
//   Example:
//
//     {
//       initialPosition: [-3.5, 0, 0],  ⬅️ left
//       finalPosition:   [-1.5, 0, 0],  ➡️ center-left
//     }
//
//   💡 You are separating DATA from ANIMATION
//      → very good practice ✅
//
// ─────────────────────────────────────
// ⚙️ useSprings (MAIN LOGIC)
//
//   const springs = useSprings(
//     items.length,
//     items.map((item) => ({
//       from: { position: item.initialPosition },
//       to:   { position: item.finalPosition },
//     }))
//   );
//
//   👉 First argument: items.length
//       → total number of animations
//
//   👉 Second argument: configuration array
//       → one config per item
//
//   💡 Internally:
//       React-spring creates multiple springs
//       (one for each item)
//
//   Result:
//
//     springs = [
//       { position: animatedValue },
//       { position: animatedValue },
//       { position: animatedValue },
//     ]
//
// ─────────────────────────────────────
// 🎬 ANIMATION LOGIC
//
//   from → starting position
//   to   → ending position
//
//   Each cube:
//
//     Cube 1: left  → center-left ⬅️➡️
//     Cube 2: top   → center      ⬆️⬇️
//     Cube 3: right → center-right ➡️⬅️
//
//   💡 All animations run together automatically
//
// ─────────────────────────────────────
// 🧱 RENDERING MULTIPLE OBJECTS
//
//   {springs.map((item, i) => (
//     <a.mesh ... />
//   ))}
//
//   👉 Loop through each spring
//   👉 Render one cube per spring
//
//   item.position
//     → animated position for that cube
//
//   ⚠️ IMPORTANT:
//
//     key={Math.random()} ❌ (not recommended)
//
//     Why?
//       → React cannot track elements properly
//       → Causes re-render issues
//
//     ✅ Better:
//       key={i}
//
// ─────────────────────────────────────
// 🎨 MESH DETAILS
//
//   <a.mesh
//     scale={0.5}
//     position={item.position}
//   >
//
//   👉 position={item.position}
//       → animated position (VERY IMPORTANT)
//
//   👉 scale={0.5}
//       → smaller cubes
//
//   <boxGeometry />
//     → cube shape 📦
//
//   <a.meshBasicMaterial color={"orange"} />
//     → orange color 🎨
//
//   ⚠️ Using `a.mesh` is required
//     → otherwise animation won't work
//
// ─────────────────────────────────────
// 🔄 COMPLETE FLOW
//
//   1. All cubes start at different positions
//
//   2. Animation begins automatically ▶️
//
//   3. Each cube moves toward its target:
//
//        left   → center-left
//        top    → center
//        right  → center-right
//
//   4. Movement is smooth (spring-based)
//
// ─────────────────────────────────────
// 💡 WHY useSprings IS POWERFUL
//
//   ✔ Handles multiple animations easily
//   ✔ Keeps code clean (no multiple useSpring calls)
//   ✔ Scales well for large scenes
//   ✔ Works perfectly with mapped data
//
//   💡 Real-world usage:
//
//     → product grids (your project 👀)
//     → list animations
//     → particle systems
//     → multi-object 3D scenes
//
// ─────────────────────────────────────
// ⚖️ useSpring vs useSprings
//
//   🔹 useSpring
//     → single object
//     → simple animations
//
//   🔹 useSprings
//     → multiple objects
//     → dynamic lists
//     → scalable animations
//
//   💡 Rule:
//
//     If you see `.map()` → think useSprings 🧠
//
// ─────────────────────────────────────
// 🚀 PRO TIPS
//
//   → Add delay per item for stagger effect 🎬
//   → Use config for physics-based motion ⚙️
//   → Combine rotation + position for better visuals 🔄
//   → Use unique IDs instead of index in real apps
//
// ─────────────────────────────────────
// 🔗 PRACTICE TOOL:
//
//   https://react-spring-visualizer.com/
//
//   💡 With the help of this:
//     → You can understand how motion behaves
//     → Tune animation feel (smooth vs bouncy)
//     → Build strong animation intuition 🎯
//
// ─────────────────────────────────────
